$("#text-area").val("");



$(document).keydown( (event) => {
    
    setTimeout(() =>{
        setLimitValue();
    }, 0.1)
    

});

function setLimitValue(){
    var textInInputArea = $("#text-area").val();
    var symbolsLeft = getLimit() - textInInputArea.length;
    var classToSet = checkCorrectness(symbolsLeft);
    clearClassesFromIndicator();
    $("#indicator").addClass(classToSet);
    $("#counter").text(symbolsLeft);
}


function checkCorrectness(symbolsLeft){
    if(symbolsLeft>0){
        return "text-bg-success";
    }
    else if(symbolsLeft===0)
    {
        return "text-bg-warning";
    }
    else{
        return "text-bg-danger";
    }
}

function clearClassesFromIndicator(){
    $("#indicator").removeClass(["text-bg-success","text-bg-warning","text-bg-danger"]);

}

function getLimit(){
    if($("#button-limit-one").prop("checked"))
    {
        return 1024;
    }
    else{
        return 4096;
    }
}

$("#button-limit-one").click( () => {
    setTimeout(() =>{
        setLimitValue();
    }, 0.1)
}   
)

$("#button-limit-two").click( () => {
    setTimeout(() =>{
        setLimitValue();
    }, 0.1)
}   
)