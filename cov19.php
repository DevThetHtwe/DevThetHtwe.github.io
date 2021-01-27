<?php
 
include('simple_html_dom.php');
 
$url = 'https://mohs.gov.mm/Main/content/publication/2019-ncov';
 
$html = file_get_html($url);

$variable = "ember21";

$ret = $html->find("div[id=$variable]", 0);

if ($ret) {
    echo $ret->innertext; 
}
    
    // $headlines = array();

    // foreach($html->find('div[id=$variable]',0)){
    //     echo $aa;
    // }

?>