$(function () {
  $("#submit").click(function () {
    var result = $(".ctf").val();
    if(result == "↑↑↓↓←→←→BABA"){
      alert('！！！{put_key_here}');
      return true;
    }
    else{
      alert('错误');
      alert('error');
      alert('誤り');
    }
  })
  
  $("#left").click(function () {

    $(".ctf").val($(".ctf").val()+"←");
  })

  $("#right").click(function () {

    $(".ctf").val($(".ctf").val()+"→");
  })
  $("#top").click(function () {

    $(".ctf").val($(".ctf").val()+"↑");
  })
  $("#down").click(function () {

    $(".ctf").val($(".ctf").val()+"↓");
  })

  $("#a").click(function () {

    $(".ctf").val($(".ctf").val()+"A");
  })

  $("#b").click(function () {

    $(".ctf").val($(".ctf").val()+"B");
  })
  $("#x").click(function () {

    $(".ctf").val($(".ctf").val()+"X");
  })
  $("#y").click(function () {

    $(".ctf").val($(".ctf").val()+"Y");
  })
})
