function parkingButton() {
    let parkingDisplay = $('#Parking').css('opacity');

    if(parkingDisplay == 1) {
        $('#Parking').css('opacity', '0');
        $('.side-bar-button-parking').css('color', '#FFFFFF');
        $('#Parking').css('transform', 'translate(0px, -150px)');
        console.log('toggle parking off');
    }
    else {
        $('#Parking').css('opacity', '1');
        $('#Parking').css('transform', 'translate(0px, 0px)');
        $('.side-bar-button-parking').css('color', '#F7931E');
        console.log('toggle parking on');
    }
}

function bikelaneButton() {
    let bikelaneDisplay = $('#Bicycle_lane').css('opacity');

    if(bikelaneDisplay == 1) {
        $('#Bicycle_lane').css('opacity', '0');
        $('.side-bar-button-bikelane').css('color', '#FFFFFF');
        $('#Bicycle_lane').css('transform', 'translate(0px, -150px)');
        console.log('toggle bike-lane off');
    }
    else {
        $('#Bicycle_lane').css('opacity', '1');
        $('#Bicycle_lane').css('transform', 'translate(0px, 0px)');
       
        $('.side-bar-button-bikelane').css('color', '#FF0000');
        console.log('toggle bike-lane on');
    }
}

