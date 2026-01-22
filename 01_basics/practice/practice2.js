function countVowels (str){
    count=0;
    for(char of str){
       if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count ++        
       }
        
    }
    console.log(count);
}
countVowels("jafar")