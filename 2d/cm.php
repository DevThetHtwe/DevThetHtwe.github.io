<?php
    require("simple_html_dom.php");
    
    $html = file_get_html('https://channelmyanmar.org/khun-phaen-begins-2019/');
    
    $i=0;
    $mArray = array();
    
    foreach($html->find('p') as $e){
        array_push($mArray,$e->innertext);
        $i++;
        // echo $e->innertext.'<br><br><br><br>';
        
        
    }
    
    $result = array();
    $result['Description'] = $mArray[6];
    
    echo json_encode($result);
    
    
    
//   foreach($html->find('p') as $element)
//       {
//         array_push($mArray,$e->innertext);
//         $i++;
//       }
        
//         echo json_encode($mArray);
       
    //   echo $mArray[3];
    
    
    
    // foreach($html->find('td') as $e){
    //     array_push($mArray,$e->innertext);
    //     $i++;
    //     // echo $e->innertext.'<br>';
    //     if($i>7){
    //         break;
    //     }
    // }
    // $first = str_split($mArray[1]);
    // $second = str_split($mArray[7]);
    // $pointPos = strpos($mArray[7],'.');
    
    // $result = array();
    // $result['RESULT'] = $first[count($first)-1].''.$second[$pointPos-1];
    // $result['SET'] = $mArray[1];
    // $result['VALUE'] = $mArray[7];
    
    // echo json_encode($result);
?>