

//Range Arrays
//1-Procreate
//case '11 23 33': reccomendTool ='Procreate';break;
var purposeRangeArrProcreate = ["11", "12", "13"];
var scopeRangeArrProcreate = ["22", "23", "24"];
var mediaRangeArrProcreate = ["32", "33", "34"];


//2-Figma
//case '1213141518 212223 3134': reccomendTool ='Figma';break;

var purposeRangeArrFigma = ["17", "18"];
var scopeRangeArrFigma = ["22", "23", "25"];
var mediaRangeArrFigma = ["35"];

//3-Gravity Sketch
//case '1117 2324 3133': reccomendTool ='Gravity Sketch';break;
var purposeRangeArrGravitySketch = ["11", "17"];
var scopeRangeArrGravitySketch = ["23", "24"];
var mediaRangeArrGravitySketch = ["31","33"];

//4-Unity
//case '13141718 212425 31': reccomendTool ='Unity';break;
var purposeRangeArrUnity = ["13", "14", "17", "18"];
var scopeRangeArrUnity = ["21","24", "25"];
var mediaRangeArrUnity = ["31"];

//5-Unreal Engine
//case '13141718 212425 31': reccomendTool ='Unreal Engine';break;
var purposeRangeArrUnrealEngine = ["11","14", "17", "18"];
var scopeRangeArrUnrealEngine = ["23", "24"];
var mediaRangeArrUnrealEngine = ["31","33"];

//6-MRTK
//case '1317 2224 31': reccomendTool ='MRTK (Mixed Reality Toolkit)';break;
var purposeRangeArrMRTK = ["13", "17"];
var scopeRangeArrMRTK = ["22", "24"];
var mediaRangeArrMRTK = ["31"];

//7-InteractionSDK
//case '1317 24 31': reccomendTool ='Interaction SDK';break;
var purposeRangeArrInteraction = ["13", "17"];
var scopeRangeArrInteraction = ["24"];
var mediaRangeArrInteraction = ["31"];

//8-MasterpieceStudio
//case '1117 2324 31': reccomendTool ='Masterpiece Studio';break;
var purposeRangeArrMasterpieceStudio = ["11", "17"];
var scopeRangeArrMasterpieceStudio = ["23","24"];
var mediaRangeArrMasterpieceStudio = ["31"];

//9-Spline
//case '1112 222324 31': reccomendTool ='Spline';break;
var purposeRangeArrSpline = ["11", "12"];
var scopeRangeArrSpline = ["22","23","24"];
var mediaRangeArrSpline = ["31"];

//10-Shapes XR
//case '11161718 2324 31': reccomendTool ='Shapes XR';break;
var purposeRangeArrShapesXR = ["11", "16", "17","18"];
var scopeRangeArrShapesXR = ["23","24"];
var mediaRangeArrShapesXR = ["31"];

//11-Notion
//case '12 21 34': reccomendTool ='Notion';break;
var purposeRangeArrNotion = ["11", "16", "17","18"];
var scopeRangeArrNotion = ["23","24"];
var mediaRangeArrNotion = ["31"];

//12-Miro
//case '1112 212223 3334': reccomendTool ='Miro';break;
var purposeRangeArrMiro = ["11", "12"];
var scopeRangeArrMiro = ["21","22","23"];
var mediaRangeArrMiro = ["33","34"];

//13-PenBrush
//case '1116 23 33': reccomendTool ='PenBrush';break;
var purposeRangeArrPenBrush = ["11", "16"];
var scopeRangeArrPenBrush = ["23"];
var mediaRangeArrPenBrush = ["33"];

//14=Adobe XD
//case '12131418 212223 3134': reccomendTool ='Adobe XD';break;
var purposeRangeArrAdobeXD = [ "12", "13", "14", "18"];
var scopeRangeArrAdobeXD = ["21","22","23"];
var mediaRangeArrAdobeXD = ["31","34"];

//15 SketchUP
//case '1117 2223 3134': reccomendTool ='SketchUP';break;
var purposeRangeArrSketchUP = [ "11", "17"];
var scopeRangeArrSketchUP = ["22","23"];
var mediaRangeArrSketchUP = ["31","34"];

//16 Blender
//case '111417 2324 31': reccomendTool ='Blender';break;
var purposeRangeArrBlender = [ "11", "14","17"];
var scopeRangeArrBlender = ["23","24"];
var mediaRangeArrBlender = ["31"];

//17 AzureRP
//case '121318 2122 3134': reccomendTool ='Azure RP';break;
var purposeRangeArrAzureRP = [ "12", "13", "18"];
var scopeRangeArrAzureRP = ["21","22"];
var mediaRangeArrAzureRP = ["31","34"];

//18 Tilt Brush
//case '1116 2324 3133': reccomendTool ='Tilt Brush';break;
var purposeRangeArrTiltBrush = [ "11", "16"];
var scopeRangeArrTiltBrush = ["23","24"];
var mediaRangeArrTiltBrush = ["31","33"];

function hello(){
    //alert("Text="+document.getElementById("divReccomendation").innerHTML);
    reccomendToolText();
    
}

function reccomendToolText(){
    var reccomendTool ="";

    //*****1 Procreate start */
    //check procreate
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrProcreate);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrProcreate);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrProcreate);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Procreate<br>";
    }
    
    //*****Procreate end */
 

    //*****2 FIGMA start */
    //check Figma
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrFigma);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrFigma);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrFigma);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Figma<br>";
    }
    
    //*****FIGMA end */

    //*****3 Gravity start */
    //check Gravity
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrGravitySketch);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrGravitySketch);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrGravitySketch);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Gravity Sketch<br>";
    }
    
    //*****GRAVITY end */

    //*****4 UNITY start */
    //check Unity
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrUnity);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrUnity);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrUnity);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Unity<br>";
    }
    
    //*****UNITY end */

    //*****5 UNREAL start */
    //check Unreal
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrUnrealEngine);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrUnrealEngine);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrUnrealEngine);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Unreal Engine<br>";
    }
    
    //*****Unreal end */

    //*****6 MRTK start */
    //check MRTK
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrMRTK);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrMRTK);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrMRTK);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "MRTK<br>";
    }

    //*****7 InteractionSDK start */
    //check InteractionSDK
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrInteraction);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrInteraction);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrInteraction);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Interaction SDK<br>";
    }
    
    //*****Interaction SDK end */

    //*****8 Masterpiece Studio start */
    //check Masterpiece Studio
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrMasterpieceStudio);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrMasterpieceStudio);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrMasterpieceStudio);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Masterpiece Studio<br>";
    }
    
    //*****Masterpiece Studio end */

    //*****9 Spline start */
    //check Spline
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrSpline);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrSpline);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrSpline);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Spline K<br>";
    }
    
    //*****Spline end */

    //*****10 Shapes XR start */
    //check Shapes XR
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrShapesXR);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrShapesXR);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrShapesXR);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "ShapesXR<br>";
    }
    
    //*****Shapes XR end */

    //*****11 Notio start */
    //check Notion
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrNotion);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrNotion);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrNotion);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Notion<br>";
    }
    
    //*****Notion end */

    //*****12 MIRO start */
    //check MIRO
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrMiro);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrMiro);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrMiro);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "MIRO<br>";
    }
    
    //*****Miro end */

    //*****13 Penbrush start */
    //check Penbrush
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrPenBrush);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrPenBrush);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrPenBrush);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "PenBrush<br>";
    }
    
    //*****Penbrush end */

    //*****14 AdobeXD start */
    //check AdobeXD
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrAdobeXD);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrAdobeXD);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrAdobeXD);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Adobe XD<br>";
    }
    
    //*****Adobe XD end */

    //*****15 SketchUP start */
    //check SketchUP
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrSketchUP);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrSketchUP);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrSketchUP);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Sketch UP<br>";
    }
    
    //*****Sketch UP end */

    //*****16 Blender start */
    //check Blender
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrBlender);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrBlender);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrBlender);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Blender <br>";
    }
    
    //*****Blender end */

    //*****17 Azure RP start */
    //check AzureRP
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrAzureRP);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrAzureRP);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrAzureRP);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Azure RP<br>";
    }
    
    //*****Azure RP end */

    //*****18 Tilt Brush start */
    //check Tilt Brush
    var isPurpose = matchCheckedWithChoice(getChecked('chkPurpose'),purposeRangeArrTiltBrush);
    var isScope = matchCheckedWithChoice(getChecked('chkScope'),scopeRangeArrTiltBrush);
    var isMedia = matchCheckedWithChoice(getChecked('chkMedia'),mediaRangeArrTiltBrush);
    //console.log("isPurpose="+isPurpose + " isScope=" + isScope + " isMedia=" + isMedia);

    if(isPurpose && isScope && isMedia) {
        reccomendTool += "Tilt Brush<br>";
    }
    
    //*****Tilt Brush end */

 
    if (reccomendTool =="") reccomendTool = "Modify your criteria";

    document.getElementById("divReccomendation").innerHTML =  ""+reccomendTool;
    
}

//function to compare checked values with tool choice matrix
//returns true if there is atleast one match, false otherwise
function matchCheckedWithChoice(arrCheck, arrChoice){
    
    for(i=0;i<arrCheck.length;i++){
        for(j=0;j<arrChoice.length;j++){
            if(arrCheck[i]==arrChoice[j]){
                //atleast one match
                //console.log("i="+i+" j="+j+"arrCheck[i]="+arrCheck[i]+"arrChoice[j]="+arrChoice[j]);
                return true;
                //break;
            }
        }
    }

    return false;
}
//function to return an array with ONLY checked values for the given type (chkPurpose / scope / media)
function getChecked(chkType){

    var arrReturn =[];

    var checkboxArr = document.getElementsByClassName(chkType);

    for(var i=0; i< checkboxArr.length; i++){
        if(checkboxArr[i].checked){
            arrReturn.push(checkboxArr[i].value);     
        }
   }
   //console.log("getCheckedPurpose checkedPurpose Length="+arrReturn.length);
   return arrReturn;

}

//function to check if the given test string has all the values from within the passed array
//for example the checkString 1112 or 11 or 1113 etc will return true when tested against the rangeArr 111213
//but checkString 1114 or 14 will return false
//this function is called individually for purpose, scope and media
function checkStringInRangeArray(checkString, rangeArr){

    //console.log("checking string "+checkString);
    
    for (var i=0; rangeArr[i]; ++i) {
        //console.log("check against "+ rangeArr[i]);
        if (checkString == rangeArr[i]){
            //if there is a match with any of the strings in range, return true
            return true;
        }
    }

    //else return false
    return false;
    
}

//function to return an array of selected checkboxes by category
//this function takes the parameter chkType, which can be chkPurpose, chkScope or chkMedia
//essentially it matches the name of the html checkbox tag's class to return the checked values
function getCheckBoxSelectionsByType(chkType){

    var checkedValue = ""; 
    //input array of selected values
    var checkedValuesArr = document.getElementsByClassName(chkType);
    
    for(var i=0; checkedValuesArr[i]; ++i){
         if(checkedValuesArr[i].checked){
              checkedValue += checkedValuesArr[i].value;
                       
         }
    }
  
    return checkedValue;

}

function rangeArray (strArray){
    // array = [11 12 13]
    //to get array of all 6 values
    var finalArray =[];
    //var strArray = ["11" ,"12" ,"13", "15", "14", "16", "17", "18"];
    for (i = 0; i< strArray.length;i++){
        finalArray.push(strArray[i]);
        for (j = i+1; j< strArray.length; j++){
            finalArray.push(strArray[i]+strArray[j]);
            for (k=j+1;k<strArray.length;k++){
                finalArray.push(strArray[i]+strArray[j]+strArray[k]);
                for (l=k+1;l<strArray.length;l++){
                    finalArray.push(strArray[i]+strArray[j]+strArray[k]+strArray[l]);
                    for (m=l+1;m<strArray.length;m++){
                        finalArray.push(strArray[i]+strArray[j]+strArray[k]+strArray[l]+strArray[m]);
                        for (n=m+1;n<strArray.length;n++){
                            finalArray.push(strArray[i]+strArray[j]+strArray[k]+strArray[l]+strArray[m]+strArray[n]);
                            for (o=n+1;o<strArray.length;o++){
                                finalArray.push(strArray[i]+strArray[j]+strArray[k]+strArray[l]+strArray[m]+strArray[n]+strArray[o]);
                                for (p=o+1;p<strArray.length;p++){
                                    finalArray.push(strArray[i]+strArray[j]+strArray[k]+strArray[l]+strArray[m]+strArray[n]+strArray[o]+strArray[p]);
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    console.log("final array = ", finalArray);
    return finalArray;



}



//this function is not used

function reccomendTool(){
    var reccomendTool ="No Reccomendations";
    
    var checkedValues = gettCheckBoxSelections();

    //if purpose is selected, or +-, and scope is selected, or +-,
    //alert(checkedValues);
    switch (checkedValues) {
        case '11 23 33': reccomendTool ='Procreate';break;
        case '1213141518 212223 3134': reccomendTool ='Figma';break;
        case '1117 2324 3133': reccomendTool ='Gravity Sketch';break;
        case '13141718 212425 31': reccomendTool ='Unity';break;
        case '13141718 212425 31': reccomendTool ='Unreal Engine';break;
        case '1317 2224 31': reccomendTool ='MRTK (Mixed Reality Toolkit)';break;
        case '1317 24 31': reccomendTool ='Interaction SDK';break;
        case '1117 2324 31': reccomendTool ='Masterpiece Studio';break;
        case '1112 222324 31': reccomendTool ='Spline';break;
        case '11161718 2324 31': reccomendTool ='Shapes XR';break;
        case '12 21 34': reccomendTool ='Notion';break;
        case '1112 212223 3334': reccomendTool ='Miro';break;
        case '1116 23 33': reccomendTool ='PenBrush';break;
        case '12131418 212223 3134': reccomendTool ='Adobe XD';break;
        case '1117 2223 3134': reccomendTool ='SketchUP';break;
        case '111417 2324 31': reccomendTool ='Blender';break;
        case '121318 2122 3134': reccomendTool ='Azure RP';break;
        case '1116 2324 3133': reccomendTool ='Tilt Brush';break;

    }
     document.getElementById("divReccomendation").innerHTML =  ""+reccomendTool;
    
}

//this function is not used
function gettCheckBoxSelections(){

    var checkedValue = ""; 
    //input array of selected values
    var chkPurpose = document.getElementsByClassName('chkPurpose');
    var chkScope = document.getElementsByClassName('chkScope');
    var chkMedia = document.getElementsByClassName('chkMedia');
    
    for(var i=0; chkPurpose[i]; ++i){
         if(chkPurpose[i].checked){
              checkedValue += chkPurpose[i].value;
                       
         }
    }
    
    checkedValue += " ";

    for(var i=0; chkScope[i]; ++i){
        if(chkScope[i].checked){
             checkedValue += chkScope[i].value;
                      
        }
   }
   
   checkedValue += " ";
   for(var i=0; chkMedia[i]; ++i){
        if(chkMedia[i].checked){
            checkedValue += chkMedia[i].value;
                  
        }
    }

    return checkedValue;

}



