var a = window.getComputedStyle(document.getElementById('Tartaglia'));
var b = window.getComputedStyle(document.getElementById('Rosaria'));
var e1 = window.getComputedStyle(document.getElementById('event1'));
var e2 = window.getComputedStyle(document.getElementById('event2'));
var e3 = window.getComputedStyle(document.getElementById('event3'));
var e4 = window.getComputedStyle(document.getElementById('event4'));
let let_feature1 = document.getElementById('feature1').style;
let get_feature1 = window.getComputedStyle(document.getElementById('feature1'));
let let_feature2 = document.getElementById('feature2').style;
let get_feature2 = window.getComputedStyle(document.getElementById('feature2'));
let let_feature3 = document.getElementById('feature3').style;
let get_feature3 = window.getComputedStyle(document.getElementById('feature3'));
let let_feature4 = document.getElementById('feature4').style;
let get_feature4 = window.getComputedStyle(document.getElementById('feature4'));
let let_feature5 = document.getElementById('feature5').style;
let get_feature5 = window.getComputedStyle(document.getElementById('feature5'));
var flag = true;

    function judge(){
        document.getElementById('Tartaglia').addEventListener('transitionend',function(){
            flag = true;
        })
        document.getElementById('event1').addEventListener('transitionend',function(){
            flag = true;
        })
    }
    document.getElementById('right_btn1').onclick = function(){
        
            if(flag)
        {
            flag = false;
            if(b.left == "0px")
        {
            document.getElementById('Tartaglia').style.transition = "none";
            document.getElementById('Tartaglia').style.left = "1500px";
        }
        if(a.left == "0px")
        {
            document.getElementById('Rosaria').style.transition = "none";
            document.getElementById('Rosaria').style.left = "1500px";
        }  
        setTimeout(()=>{
            document.getElementById('Tartaglia').style.transition = "all 2s";
            document.getElementById('Rosaria').style.transition = "all 2s";
            document.getElementById('Tartaglia').style.left = parseInt(a.left) - 1500 +'px';
            document.getElementById('Rosaria').style.left = parseInt(b.left) - 1500 +'px';
        },1)
        judge();
        }
    
    }
    document.getElementById('left_btn1').onclick = function(){
        if( flag){
        flag = false;
        if(a.left == "0px")
        {
            document.getElementById('Rosaria').style.transition = "none";
            document.getElementById('Rosaria').style.left = "-1500px";
        }
        if(b.left == "0px")
        {
            document.getElementById('Tartaglia').style.transition = "none";
            document.getElementById('Tartaglia').style.left = "-1500px";
        }
        setTimeout(() => {
            document.getElementById('Tartaglia').style.transition = "all 2s";
            document.getElementById('Rosaria').style.transition = "all 2s";
            document.getElementById('Tartaglia').style.left = parseInt(a.left) + 1500 +'px';
            document.getElementById('Rosaria').style.left = parseInt(b.left) + 1500 +'px';
        }, 1)
        judge();
        }
        
    }
    document.getElementById('right_btn2').onclick = function(){
            if(flag)
            {
                flag = false;
                if(e1.left == "50px"){
                    document.getElementById('event4').style.transition = "none";
                    document.getElementById('event4').style.left = "1460px";
                }
                if(e2.left == "50px"){
                    document.getElementById('event1').style.transition = "none";
                    document.getElementById('event1').style.left = "1460px";
                }
                if(e3.left == "50px"){
                    document.getElementById('event2').style.transition = "none";
                    document.getElementById('event2').style.left = "1460px";
                }
                if(e4.left == "50px"){
                    document.getElementById('event3').style.transition = "none";
                    document.getElementById('event3').style.left = "1460px";
                }
                setTimeout(()=>{
                    document.getElementById('event1').style.transition = "left 2s,top 200ms";
                    document.getElementById('event2').style.transition = "left 2s,top 200ms";
                    document.getElementById('event3').style.transition = "left 2s,top 200ms";
                    document.getElementById('event4').style.transition = "left 2s,top 200ms";
                    document.getElementById('event1').style.left = parseInt(e1.left) - 470 + "px";
                    document.getElementById('event2').style.left = parseInt(e2.left) - 470 + "px";
                    document.getElementById('event3').style.left = parseInt(e3.left) - 470 + "px";
                    document.getElementById('event4').style.left = parseInt(e4.left) - 470 + "px";},1)
            judge();
        }
        
    }
    document.getElementById('left_btn2').onclick = function(){
            if(flag)
            {
                flag = false;
                if(e1.left == "50px"){
                    document.getElementById('event4').style.transition = "none";
                    document.getElementById('event4').style.left = "-420px";
                }
                if(e2.left == "50px"){
                    document.getElementById('event1').style.transition = "none";
                    document.getElementById('event1').style.left = "-420px";
                }
                if(e3.left == "50px"){
                    document.getElementById('event2').style.transition = "none";
                    document.getElementById('event2').style.left = "-420px";
                }
                if(e4.left == "50px"){
                    document.getElementById('event3').style.transition = "none";
                    document.getElementById('event3').style.left = "-420px";
                }
                setTimeout(()=>{
                    document.getElementById('event1').style.transition = "left 2s,top 200ms";
                    document.getElementById('event2').style.transition = "left 2s,top 200ms";
                    document.getElementById('event3').style.transition = "left 2s,top 200ms";
                    document.getElementById('event4').style.transition = "left 2s,top 200ms";
                    document.getElementById('event1').style.left = parseInt(e1.left) + 470 + "px";
                    document.getElementById('event2').style.left = parseInt(e2.left) + 470 + "px";
                    document.getElementById('event3').style.left = parseInt(e3.left) + 470 + "px";
                    document.getElementById('event4').style.left = parseInt(e4.left) + 470 + "px";},1)
            judge();
        }
    
    }
    document.getElementById('right_btn3').onclick = function(){
        if(get_feature2.left == "200px"){
            
            let_feature4.transition = "none";
            let_feature4.left = "1200px";
            setTimeout(() =>{let_feature4.transition = "all 1s";
            let_feature1.left = "-600px";
            let_feature2.left = "0px";
            let_feature2.height = "300px";
            let_feature2.width = "600px";
            let_feature2.filter = "brightness(50%)";
            let_feature2.top = "50px";
            let_feature2.zIndex = "1";
            let_feature3.left = "200px";
            let_feature3.height = "400px";
            let_feature3.width = "800px";
            let_feature3.filter = "brightness(100%)";
            let_feature3.zIndex = "2";
            let_feature3.top = "0px";
            let_feature4.left = "600px";
            let_feature4.zIndex = "1";
            document.getElementById('dot').style.left = "520px";
        },1);
            
            }
            if(get_feature3.left == "200px"){
                
                let_feature5.transition = "none";
                let_feature5.left = "1200px";
                setTimeout(() =>{let_feature5.transition = "all 1s";
                let_feature2.left = "-600px";
                let_feature3.left = "0px";
                let_feature3.height = "300px";
                let_feature3.width = "600px";
                let_feature3.filter = "brightness(50%)";
                let_feature3.top = "50px";
                let_feature3.zIndex = "1";
                let_feature4.left = "200px";
                let_feature4.height = "400px";
                let_feature4.width = "800px";
                let_feature4.filter = "brightness(100%)";
                let_feature4.zIndex = "2";
                let_feature4.top = "0px";
                let_feature5.left = "600px";
                let_feature5.zIndex = "1";
            },1);
                document.getElementById('dot').style.left = "570px";
                }
            if(get_feature4.left == "200px"){
                
                let_feature1.transition = "none";
                let_feature1.left = "1200px";
                setTimeout(() =>{let_feature1.transition = "all 1s";
                let_feature3.left = "-600px";
                let_feature4.left = "0px";
                let_feature4.height = "300px";
                let_feature4.width = "600px";
                let_feature4.filter = "brightness(50%)";
                let_feature4.top = "50px";
                let_feature4.zIndex = "1";
                let_feature5.left = "200px";
                let_feature5.height = "400px";
                let_feature5.width = "800px";
                let_feature5.filter = "brightness(100%)";
                let_feature5.zIndex = "2";
                let_feature5.top = "0px";
                let_feature1.left = "600px";
                let_feature1.zIndex = "1";
                document.getElementById('dot').style.left = "620px";
            },1);
                
                }
                if(get_feature5.left == "200px"){
                
                    let_feature2.transition = "none";
                    let_feature2.left = "1200px";
                    setTimeout(() =>{let_feature2.transition = "all 1s";
                    let_feature4.left = "-600px";
                    let_feature5.left = "0px";
                    let_feature5.height = "300px";
                    let_feature5.width = "600px";
                    let_feature5.filter = "brightness(50%)";
                    let_feature5.top = "50px";
                    let_feature5.zIndex = "1";
                    let_feature1.left = "200px";
                    let_feature1.height = "400px";
                    let_feature1.width = "800px";
                    let_feature1.filter = "brightness(100%)";
                    let_feature1.zIndex = "2";
                    let_feature1.top = "0px";
                    let_feature2.left = "600px";
                    let_feature2.zIndex = "1";
                    document.getElementById('dot').style.left = "670px";
                },1);
                    
                    }
                    if(get_feature1.left == "200px"){
                
                        let_feature3.transition = "none";
                        let_feature3.left = "1200px";
                        setTimeout(() =>{let_feature3.transition = "all 1s";
                        let_feature5.left = "-600px";
                        let_feature1.left = "0px";
                        let_feature1.height = "300px";
                        let_feature1.width = "600px";
                        let_feature1.filter = "brightness(50%)";
                        let_feature1.top = "50px";
                        let_feature1.zIndex = "1";
                        let_feature2.left = "200px";
                        let_feature2.height = "400px";
                        let_feature2.width = "800px";
                        let_feature2.filter = "brightness(100%)";
                        let_feature2.zIndex = "2";
                        let_feature2.top = "0px";
                        let_feature3.left = "600px";
                        let_feature3.zIndex = "1";
                    },1);
                    document.getElementById('dot').style.left = "470px";
                        }
    }  
    document.getElementById('left_btn3').onclick = function(){
        if(get_feature2.left == "200px"){
                
            let_feature5.transition = "none";
            let_feature5.left = "-600px";
            setTimeout(() =>{let_feature5.transition = "all 1s";
            let_feature3.left = "1200px";
            let_feature2.left = "600px";
            let_feature2.height = "300px";
            let_feature2.width = "600px";
            let_feature2.filter = "brightness(50%)";
            let_feature2.top = "50px";
            let_feature2.zIndex = "1";
            let_feature1.left = "200px";
            let_feature1.height = "400px";
            let_feature1.width = "800px";
            let_feature1.filter = "brightness(100%)";
            let_feature1.zIndex = "2";
            let_feature1.top = "0px";
            let_feature5.left = "0px";
            let_feature5.zIndex = "1";
            document.getElementById('dot').style.left = "670px";
        },1);
            
            }
            if(get_feature1.left == "200px"){
                
                let_feature4.transition = "none";
                let_feature4.left = "-600px";
                setTimeout(() =>{let_feature4.transition = "all 1s";
                let_feature2.left = "1200px";
                let_feature1.left = "600px";
                let_feature1.height = "300px";
                let_feature1.width = "600px";
                let_feature1.filter = "brightness(50%)";
                let_feature1.top = "50px";
                let_feature1.zIndex = "1";
                let_feature5.left = "200px";
                let_feature5.height = "400px";
                let_feature5.width = "800px";
                let_feature5.filter = "brightness(100%)";
                let_feature5.zIndex = "2";
                let_feature5.top = "0px";
                let_feature4.left = "0px";
                let_feature4.zIndex = "1";
            },1);
            document.getElementById('dot').style.left = "620px";
                }
                if(get_feature5.left == "200px"){
                
                    let_feature3.transition = "none";
                    let_feature3.left = "-600px";
                    setTimeout(() =>{let_feature3.transition = "all 1s";
                    let_feature1.left = "1200px";
                    let_feature5.left = "600px";
                    let_feature5.height = "300px";
                    let_feature5.width = "600px";
                    let_feature5.filter = "brightness(50%)";
                    let_feature5.top = "50px";
                    let_feature5.zIndex = "1";
                    let_feature4.left = "200px";
                    let_feature4.height = "400px";
                    let_feature4.width = "800px";
                    let_feature4.filter = "brightness(100%)";
                    let_feature4.zIndex = "2";
                    let_feature4.top = "0px";
                    let_feature3.left = "0px";
                    let_feature3.zIndex = "1";
                },1);
                document.getElementById('dot').style.left = "570px";
                    }
                    if(get_feature4.left == "200px"){
                
                        let_feature2.transition = "none";
                        let_feature2.left = "-600px";
                        setTimeout(() =>{let_feature2.transition = "all 1s";
                        let_feature5.left = "1200px";
                        let_feature4.left = "600px";
                        let_feature4.height = "300px";
                        let_feature4.width = "600px";
                        let_feature4.filter = "brightness(50%)";
                        let_feature4.top = "50px";
                        let_feature4.zIndex = "1";
                        let_feature3.left = "200px";
                        let_feature3.height = "400px";
                        let_feature3.width = "800px";
                        let_feature3.filter = "brightness(100%)";
                        let_feature3.zIndex = "2";
                        let_feature3.top = "0px";
                        let_feature2.left = "0px";
                        let_feature2.zIndex = "1";
                    },1);
                    document.getElementById('dot').style.left = "520px";
                        }
                        if(get_feature3.left == "200px"){
                
                            let_feature1.transition = "none";
                            let_feature1.left = "-600px";
                            setTimeout(() =>{let_feature1.transition = "all 1s";
                            let_feature4.left = "1200px";
                            let_feature3.left = "600px";
                            let_feature3.height = "300px";
                            let_feature3.width = "600px";
                            let_feature3.filter = "brightness(50%)";
                            let_feature3.top = "50px";
                            let_feature3.zIndex = "1";
                            let_feature2.left = "200px";
                            let_feature2.height = "400px";
                            let_feature2.width = "800px";
                            let_feature2.filter = "brightness(100%)";
                            let_feature2.zIndex = "2";
                            let_feature2.top = "0px";
                            let_feature1.left = "0px";
                            let_feature1.zIndex = "1";
                        },1);
                        document.getElementById('dot').style.left = "470px";
                            }
    }  