function showOnboarding() {
    document.getElementById("onboarding-box").style.display = "block";
}

function closeOnboarding() {
    document.getElementById("onboarding-box").style.display = "none";
}

function startTour() {
    closeOnboarding();
    runTourStep(0);
}

const steps = [
    { selector: "nav", message: "This is your navigation bar." },
    { selector: ".hero", message: "This is your homepage hero section." },
    { selector: "footer", message: "This is your footer." }
];

function runTourStep(i) {
    if (i >= steps.length) return;

    const step = steps[i];
    const element = document.querySelector(step.selector);

    element.scrollIntoView({ behavior: "smooth", block: "center" });

    const bubble = document.createElement("div");
    bubble.innerHTML = step.message;
    bubble.style.position = "absolute";
    bubble.style.background = "white";
    bubble.style.padding = "10px";
    bubble.style.borderRadius = "8px";
    bubble.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    bubble.style.zIndex = "9999";

    document.body.appendChild(bubble);

    const rect = element.getBoundingClientRect();
    bubble.style.top = rect.top + window.scrollY - 60 + "px";
    bubble.style.left = rect.left + "px";

    setTimeout(() => {
        bubble.remove();
        runTourStep(i + 1);
    }, 3000);
}

if (!localStorage.getItem("kunet_visited")) {
    localStorage.setItem("kunet_visited", "true");
    setTimeout(() => {
        showOnboarding();
    }, 1000);
}
