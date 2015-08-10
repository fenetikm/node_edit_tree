<?php 
  hide($form['additional_settings']); 
  print drupal_render_children($form);
?>
<div class="element-invisible"><?php show($form['additional_settings']); print drupal_render_children($form); ?></div>
