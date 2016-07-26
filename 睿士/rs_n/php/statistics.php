<?php 
	// 连接数据库 
	$con = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);

	//选库
	mysql_select_db('app_ellemen',$con);

	$act=$_GET['act'];

	if (!empty($act)){
		//先获取现在数据库中的分享数，再加一
		$start_number = mysql_query('select fenxiang_number from ellemen where id=1');
		$data = mysql_fetch_assoc($start_number);
		$result=$data['fenxiang_number'];//获取到目前的分享数

		//设置
		// $sql = "update ellemen set fenxiang_number=";
		$result = $result+1;
		$updatasql = "update ellemen set fenxiang_number = $result";
		if (mysql_query($updatasql)){
			echo "0";
		}else{
			echo "1";
		}
	}
	
 ?>