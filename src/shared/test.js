import React,{Component} from 'react';


function Test(obj){
    this.name = obj.name;
    this.age = obj.age;
    this.init();

}
Test.prototype.init = function(){
    console.log(this.name+'...'+this.age);
}

Test.prototype.show = function(){
    console.log("this is a show test");
}



export default Test;
