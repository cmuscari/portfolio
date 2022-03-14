// Global Variables
var runBuddyContainerEl = document.querySelector("#run-buddy");
var runBuddyTextEl = document.querySelector("#run-buddy-text");
var sampleProject1ContainerEl = document.querySelector("#sample-project-1");
var sampleProject1TextEl = document.querySelector("#sample-project-1-text");
var sampleProject2ContainerEl = document.querySelector("#sample-project-2");
var sampleProject2TextEl = document.querySelector("#sample-project-2-text");
var sampleProject3ContainerEl = document.querySelector("#sample-project-3");
var sampleProject3TextEl = document.querySelector("#sample-project-3-text");
var sampleProject4ContainerEl = document.querySelector("#sample-project-4");
var sampleProject4TextEl = document.querySelector("#sample-project-4-text");
var sampleProject5ContainerEl = document.querySelector("#sample-project-5");
var sampleProject5TextEl = document.querySelector("#sample-project-5-text");





// RUN BUDDY - display text on hover
var showRunBuddyText = function () {
    $(runBuddyTextEl).removeClass("d-none");   
}

var hideRunBuddyText = function () {
    $(runBuddyTextEl).addClass("d-none");
}

runBuddyContainerEl.addEventListener("mouseover", showRunBuddyText);
runBuddyContainerEl.addEventListener("mouseout", hideRunBuddyText);




// SAMPLE PROJECT 1 - display text on hover
var showSampleProject1Text = function () {
    $(sampleProject1TextEl).removeClass("d-none");   
}

var hideSampleProject1Text = function () {
    $(sampleProject1TextEl).addClass("d-none");
}

sampleProject1ContainerEl.addEventListener("mouseover", showSampleProject1Text);
sampleProject1ContainerEl.addEventListener("mouseout", hideSampleProject1Text);




// SAMPLE PROJECT 2 - display text on hover
var showSampleProject2Text = function () {
    $(sampleProject2TextEl).removeClass("d-none");   
}

var hideSampleProject2Text = function () {
    $(sampleProject2TextEl).addClass("d-none");
}

sampleProject2ContainerEl.addEventListener("mouseover", showSampleProject2Text);
sampleProject2ContainerEl.addEventListener("mouseout", hideSampleProject2Text);




// SAMPLE PROJECT 3 - display text on hover
var showSampleProject3Text = function () {
    $(sampleProject3TextEl).removeClass("d-none");   
}

var hideSampleProject3Text = function () {
    $(sampleProject3TextEl).addClass("d-none");
}

sampleProject3ContainerEl.addEventListener("mouseover", showSampleProject3Text);
sampleProject3ContainerEl.addEventListener("mouseout", hideSampleProject3Text);




// SAMPLE PROJECT 4 - display text on hover
var showSampleProject4Text = function () {
    $(sampleProject4TextEl).removeClass("d-none");   
}

var hideSampleProject4Text = function () {
    $(sampleProject4TextEl).addClass("d-none");
}

sampleProject4ContainerEl.addEventListener("mouseover", showSampleProject4Text);
sampleProject4ContainerEl.addEventListener("mouseout", hideSampleProject4Text);




// SAMPLE PROJECT 5 - display text on hover
var showSampleProject5Text = function () {
    $(sampleProject5TextEl).removeClass("d-none");   
}

var hideSampleProject5Text = function () {
    $(sampleProject5TextEl).addClass("d-none");
}

sampleProject5ContainerEl.addEventListener("mouseover", showSampleProject5Text);
sampleProject5ContainerEl.addEventListener("mouseout", hideSampleProject5Text);




