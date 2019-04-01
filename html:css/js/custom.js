// Display add railcard options
$( document ).ready(function() {
  $('#show').click(function() {
   $('.railcard').addClass("railcardshow");
   $('.hideinput').addClass("show");

 });
});





/*$(document).ready(function() {
           $("#return-travel").click(function(){
             $.fn.removeAllAttrs= function() {
                return this.each(function() {
                   $.each(this.attributes, function() {
                     this.ownerElement.removeAttributeNode(this);
                   });
                });
              };
           $('input:disabled').removeAllAttrs();
         });
       }); */

        $(document).ready(function() {
        // By Default Disable radio button
        $(".second").attr('disabled', true);
         // This line is used to lightly hide label for disable radio buttons.
        // Disable radio buttons function on Check Disable radio button.
        $("form input:radio").change(function() {
        if ($(this).val() == "Disable") {
        $(".second").attr('checked', false);
        $(".second").attr('disabled', true);
        $(".wrap").css('opacity', '.2');
        }
        // Else Enable radio buttons.
        else {
        $(".second").attr('disabled', false);
        }
        });
        });
