const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
let pinIsDown = false;
let latestPinPointer = "";
$(".result-box").css("border-style", "none")


inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }

    display(result)

    if(!result.length) {
        resultsBox.innerHTML = '';
        $(".result-box").css("border-style", "none")
    }
    else {
        $(".result-box").css("border-style", "solid")
    }
}
inputBox.onclick = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }

    display(result)

    if(!result.length) {
        resultsBox.innerHTML = '';
        $(".result-box").css("border-style", "none")
    }
    else {
        $(".result-box").css("border-style", "solid")
    }
}

function display(result) {
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {

    if(list[0] != undefined) {
        inputBox.value = list;
        $(".result-box").css("border-style", "none");
        resultsBox.innerHTML = '';
    }
    else {
        inputBox.value = list.innerHTML;
        $(".result-box").css("border-style", "none");
        resultsBox.innerHTML = '';
    }

    // poiter = name of the building/room in assets (String)
    let pointer = document.getElementById('input-box').value;

    // If no head image is set => Use default no image
    if (assets[pointer].headImage == "") {
        $("#info-building-image").attr("src", "https://i.postimg.cc/RCGDJGS9/noImage.png");
        $("#info-building-image").css("object-fit", "contain");
        $("#info-building-image").css("height", "75%");
        $("#info-building-image").css("width", "75%");
    }
    else {
        $("#info-building-image").attr("src", assets[pointer].headImage);
        $("#info-building-image").css("object-fit", "cover");
        $("#info-building-image").css("height", "100%");
        $("#info-building-image").css("width", "100%");
        $("#info-building-image").css("margin", "0px 0px 0px 0px");
    }

    $("#info-box-maplink").css("display", "flex");
    $("#info-box-buildinglink").css("display", "flex");

    if (assets[pointer].type == "building") {
        $("#info-box-buildinglink").css("display", "none");
        $(".info-text-floors-header").html('<i class="fa-solid fa-bars" style="margin-right: 10px;"></i>Number of floors / จำนวนชั้น')
        $("#info-text-name").html('<i class="fa-solid fa-building" style="margin-right: 10px;"></i>' + pointer);
    }
    else {
        $("#info-box-maplink").css("display", "none");
        $(".info-text-floors-header").html('<i class="fa-solid fa-bars" style="margin-right: 10px;"></i>Floor / ชั้น')
        $("#info-text-name").html('<i class="fa-solid fa-door-open" style="margin-right: 10px;"></i>' + pointer);
    }

    if (assets[pointer].description == "") {
        $(".info-text-description-header").css("display", "none");
        $("#info-text-description").text("");
    }
    else {
        $(".info-text-description-header").css("display", "flex");
        $("#info-text-description").text(assets[pointer].description);
    }

    if (assets[pointer].floors == "") {
        $(".info-text-floors-header").css("display", "none");
        $("#info-text-floors").text("");
    }
    else {
        $(".info-text-floors-header").css("display", "flex");
        $("#info-text-floors").text(assets[pointer].floors);
    }

    if (JSON.stringify(assets[pointer].places) == JSON.stringify([""])) {
        $(".info-text-places-header").css("display", "none");
        $("#info-text-places").text("");
    }
    else {
        $(".info-text-places-header").css("display", "block");
        let content = assets[pointer].places.map((list)=>{
            return "<li onclick=selectInput(this)>" + list + "</li>";
        });
        document.getElementById("info-text-places").innerHTML = "<ul>" + content.join('') + "</ul>"
    }

    if (assets[pointer].time == "") {
        $(".info-text-time-header").css("display", "none");
        $("#info-text-time").text("");
    }
    else {
        $(".info-text-time-header").css("display", "flex");
        $("#info-text-time").text(assets[pointer].time);
    }

    if (assets[pointer].capacity == "") {
        $(".info-text-capacity-header").css("display", "none");
        $("#info-text-capacity").text("");
    }
    else {
        $(".info-text-capacity-header").css("display", "flex");
        $("#info-text-capacity").text(assets[pointer].capacity);
    }

    $("#info-box-maplink").attr("href", assets[pointer].maplink)
    
    // Pins operation
    let pinPointer = "pin-" + pointer;
    if (assets[pointer].type == "room") {
        pinPointer = "pin-" + assets[pointer].building;
    }
    $(document.getElementById(latestPinPointer)).css("opacity", "0");
    $(document.getElementById(latestPinPointer)).css("visibility", "hidden");
    $(document.getElementById(latestPinPointer)).css("transform", "translate(-830px, -610px)");
    latestPinPointer = pinPointer;
    $(document.getElementById(latestPinPointer)).css("opacity", "1");
    $(document.getElementById(pinPointer)).css("visibility", "visible");
    $(document.getElementById(pinPointer)).css("transform", "translate(-830px, -590px)");

    openInfoBox()
}
