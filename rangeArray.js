function rangeArray (){
    // array = [11 12 13]
    //to get array of all 6 values
    var finalArray =[];
    var strArray = ["11" ,"12" ,"13", "15", "14", "16", "17", "18"];
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




}

function mapArray(){
    var toolMap = {
        figma: {
            purpose: ["17"],
            scope: ["25"],
            media: ["35"]
        }
    
    }
}