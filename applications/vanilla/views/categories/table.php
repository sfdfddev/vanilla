<?php if (!defined('APPLICATION')) return;
$userID = Gdn::session()->UserID;
$categoryID = isset($this->Category) ? $this->Category->CategoryID : null;
?>
    <h1 class="H HomepageTitle"><?php echo $this->data('Title').followButton($categoryID); ?></h1>
    <div class="P PageDescription"><?php echo $this->description(); ?></div>
<?php
$this->fireEvent('AfterDescription');
$this->fireEvent('AfterPageTitle');
if (c('Vanilla.EnableCategoryFollowing')) {
    echo '<div class="PageControls Top">';
    echo categoryFilters();
    echo '</div>';
}
$categories = $this->data('CategoryTree');
writeCategoryTable($categories);
?>
