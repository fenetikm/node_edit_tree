(function($) {
  $(function() {
    var ajaxCompleted = function(data) {
        $('#loaded-node').html(data);
        Drupal.attachBehaviors($('#loaded-nod'));
      };

    $('a.tree-node').click(function(e) {
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: '/node_edit_tree_node_callback',
        success: ajaxCompleted,
      });
    });
    
    $('a.tree-fc').click(function(e) {
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: '/node_edit_tree_fc_callback',
        success: ajaxCompleted,
      });
    });

  });
})(jQuery);
