
$(document).ready(function(){

        $("#one").click(function(){


            $("#output").val($("#output").val()+"1");

        });

        $("#two").click(function(){


            $("#output").val($("#output").val()+"2");

        });

        $("#three").click(function(){


            $("#output").val($("#output").val()+"3");

        });

        $("#four").click(function(){


            $("#output").val($("#output").val()+"4");

        });

        $("#five").click(function(){


            $("#output").val($("#output").val()+"5");

        });

        $("#six").click(function(){


            $("#output").val($("#output").val()+"6");

        });

        $("#seven").click(function(){


            $("#output").val($("#output").val()+"7");

        });

        $("#eight").click(function(){


            $("#output").val($("#output").val()+"8");

        });

        $("#nine").click(function(){


            $("#output").val($("#output").val()+"9");

        });

        $("#leftBrace").click(function(){


            $("#output").val($("#output").val()+"(");

        });

        $("#rightBrace").click(function(){


            $("#output").val($("#output").val()+")");

        });

        $("#zero").click(function(){


            $("#output").val($("#output").val()+"0");

        });

        $("#dot").click(function(){


            $("#output").val($("#output").val()+".");

        });

        $("#plus").click(function(){


            $("#output").val($("#output").val()+"+");

        });

        $("#minus").click(function(){


            $("#output").val($("#output").val()+"-");

        });

        $("#multiply").click(function(){


            $("#output").val($("#output").val()+"*");

        });

        $("#dividedby").click(function(){


            $("#output").val($("#output").val()+"/");

        });

        $("#backspace").click(function(){


            $("#output").val($("#output").val().slice(0,$("#output").val().length-1));

        });

        $("#clear").click(function(){


            $("#output").val("");

        });

        $("#equal").click(function(){


            $("#output").val(eval($("#output").val()));

        });

       

});

window.load=function(){

}

function total()

            {

                    var data=$("#output").val();

                    document.getElementById('output').value=eval(data);

                    return false;

            }
