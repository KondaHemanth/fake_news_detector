function call() {
$.ajax({
    type: "POST",
    url: "~/news.py",
    data: { param: text}
  }).done(function( o ) {
     // do something
  })

}