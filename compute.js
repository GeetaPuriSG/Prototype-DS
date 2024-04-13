function hello(){
    //alert("Text="+document.getElementById("divReccomendation").innerHTML);
    reccomendTool();
    printCheckBoxSelections();
}

function reccomendTool(){
    var reccomendTool ="No Reccomendations";
    var checkedValues = gettCheckBoxSelections();
    //alert(checkedValues);
    switch (checkedValues) {
        case 'q_1_1q_2_3q_3_3': reccomendTool ='Procreate';break;
        case 'q_1_2q_1_3q_1_4q_1_5q_1_8q_2_1q_2_2q_2_3q_3_1q_3_4': reccomendTool ='Figma';break;
        case 'q_1_1q_1_7q_2_3q_2_4q_3_1q_3_3': reccomendTool ='Gravity Sketch';break;
        case 'q_1_3q_1_4q_1_7q_1_8q_2_1q_2_4q_2_5q_3_1': reccomendTool ='Unity';break;
        case 'q_1_3q_1_4q_1_7q_1_8q_2_1q_2_4q_2_5q_3_1': reccomendTool ='Unreal Engine';break;
        case 'q_1_3q_1_7q_2_2q_2_4q_3_1': reccomendTool ='MRTK (Mixed Reality Toolkit)';break;
        case 'q_1_3q_1_7q_2_4q_3_1': reccomendTool ='Interaction SDK';break;
        case 'q_1_1q_1_7q_2_3q_2_4q_3_1': reccomendTool ='Masterpiece Studio';break;
        case 'q_1_1q_1_2q_2_2q_2_3q_2_4q_3_1': reccomendTool ='Spline';break;
        case 'q_1_1q_1_6q_1_7q_1_8q_2_3q_2_4q_3_1': reccomendTool ='Shapes XR';break;
        case 'q_1_2q_2_1q_3_4': reccomendTool ='Notion';break;
        case 'q_1_1q_1_2q_2_1q_2_2q_2_3q_3_3q_3_4': reccomendTool ='Miro';break;
        case 'q_1_1q_1_6q_2_3q_3_3': reccomendTool ='PenBrush';break;
        case 'q_1_2q_1_3q_1_4q_1_8q_2_1q_2_2q_2_3q_3_1q_3_4': reccomendTool ='Adobe XD';break;
        case 'q_1_1q_1_7q_2_2q_2_3q_3_1q_3_4': reccomendTool ='SketchUP';break;
        case 'q_1_1q_1_4q_1_7q_2_3q_2_4q_3_1': reccomendTool ='Blender';break;
        case 'q_1_2q_1_3q_1_8q_2_1q_2_2q_3_1q_3_4': reccomendTool ='Azure RP';break;
        case 'q_1_1q_1_6q_2_3q_2_4q_3_1q_3_3': reccomendTool ='Tilt Brush';break;

    }
    /*
        case "q_1_1":
            reccomendTool = "Unity";
            break;
        case "q_1_2":
            reccomendTool = "Prototype";
            break;
        case "q_2_1":
            reccomendTool = "Unity";
            break;
        case "q_2_2":
            reccomendTool = "Prototype";
            break;
        case "q_1_1q_1_2": 
            reccomendTool = "Figma";  
            break;  
        case "q_2_1q_2_2":
            reccomendTool = "Unity";
            break;
        case "q_1_1q_1_2q_2_1":
            reccomendTool = "Prototype";
            break;
        case "q_1_1q_1_2q_2_1q_2_2": 
            reccomendTool = "Figma";  
            break; 
        case "q_1_1q_1_2q_2_2": 
            reccomendTool = "Figma";  
            break;        
    }
    */
    document.getElementById("divReccomendation").innerHTML =  ""+reccomendTool;
    
}

function gettCheckBoxSelections(){

    var checkedValue = ""; 
    var inputElements = document.getElementsByClassName('questions');
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue += inputElements[i].value;
                    
      }
    }
    return checkedValue;

}