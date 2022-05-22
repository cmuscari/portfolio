// Global Variables
var covidRiskTrackerContainerEl = document.querySelector("#covid-risk-tracker");
var covidRiskTrackerTextEl = document.querySelector("#covid-risk-tracker-text");
var foodJunkiesContainerEl = document.querySelector("#food-junkies");
var foodJunkiesTextEl = document.querySelector("#food-junkies-text");
var sampleProject2ContainerEl = document.querySelector("#sample-project-2");
var sampleProject2TextEl = document.querySelector("#sample-project-2-text");
var sampleProject3ContainerEl = document.querySelector("#sample-project-3");
var sampleProject3TextEl = document.querySelector("#sample-project-3-text");
var sampleProject4ContainerEl = document.querySelector("#sample-project-4");
var sampleProject4TextEl = document.querySelector("#sample-project-4-text");
var sampleProject5ContainerEl = document.querySelector("#sample-project-5");
var sampleProject5TextEl = document.querySelector("#sample-project-5-text");





// COVID RISK TRACKER - display text on hover
var showCovidRiskTrackerText = function () {
    $(covidRiskTrackerTextEl).removeClass("d-none");   
}

var hideCovidRiskTrackerText = function () {
    $(covidRiskTrackerTextEl).addClass("d-none");
}

covidRiskTrackerContainerEl.addEventListener("mouseover", showCovidRiskTrackerText);
covidRiskTrackerContainerEl.addEventListener("mouseout", hideCovidRiskTrackerText);




// FOOD JUNKIES - display text on hover
var showFoodJunkiesText = function () {
    $(foodJunkiesTextEl).removeClass("d-none");   
}

var hideFoodJunkiesText = function () {
    $(foodJunkiesTextEl).addClass("d-none");
}

foodJunkiesContainerEl.addEventListener("mouseover", showFoodJunkiesText);
foodJunkiesContainerEl.addEventListener("mouseout", hideFoodJunkiesText);




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




