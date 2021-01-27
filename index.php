<?php
    require("simple_html_dom.php");
    
    $html = file_get_html('https://marketdata.set.or.th/mkt/marketsummary.do?language=en&country=US');
    
    $i=0;
    $mArray = array();
    
    foreach($html->find('td') as $e){
        array_push($mArray,$e->innertext);
        $i++;
        // echo $e->innertext.'<br>';
        if($i>7){
            break;
        }
    }
    $first = str_split($mArray[1]);
    $second = str_split($mArray[7]);
    $pointPos = strpos($mArray[7],'.');
    
    $result = array();
    $result['RESULT'] = $first[count($first)-1].''.$second[$pointPos-1];
    $result['SET'] = $mArray[1];
    $result['VALUE'] = $mArray[7];
    
    echo json_encode($result);
?>