<?php
	require 'config.php';
	require 'class.phpmailer.php';

	// Form variables
	$webresource = $_POST['webresource'];
	$phone = $_POST['phone'];
	$fio = $_POST['fio'];
	$product = $_POST['product'];
	$message = $_POST['message'];

	$submit = $_POST['submit'];

	// Support variables
	$maillist = explode('|', $emailsArr);
	$senddate = date('d.m.y H:i:s');
	$table_font = 'color:#2C3E50;font-family:\'Roboto\', \'Helvetica\', \'Helvetica Neue\', Arial, sans-serif;font-weight:light;';
	$table_style = 'border-collapse:collapse;width:100%;max-width:400px; background-color:#ffffff;font-size:14px;line-height:20px;';
	$td1_style = 'border:1px solid #BDC3C7;width:40%;padding:10px; background-color:#EBEBEB;';
	$td2_style = 'border:1px solid #BDC3C7;width:60%;padding:10px;';
	$tableTitle = '';
	if ($submit == 'subscribe') {
		$tableTitle = 'Подключение пользователя';
	}
	$msg_head = "
		<html><body><div style=\"background-color:#eeeeee;padding:30px 10px;\"><center>
			<table style=\"border-collapse:collapse;width:100%;max-width:400px;$table_font\">
				<tr>
					<td style=\"font-weight:bold;font-size:20px;line-height:24px;\">$tableTitle</td>
				</tr>
					<tr>
					<td style=\"padding:5px 0 10px 0;font-weight:regular;font-size:12px;line-height:14px;\">".$senddate."</td>
				</tr>
			</table>
			<table style=\"$table_font $table_style\">";
	$msg_foot = "
			</table>
		</center></div></body></html>";
	if($webresource !== ''){
        $msg_webresource = "
            <tr>
              <td style=\"$td1_style\">Веб ресурс:</td>
              <td style=\"$td2_style\">$webresource</td>
            </tr>";
	}
	if($phone !== ''){
        $msg_phone = "
            <tr>
              <td style=\"$td1_style\">Телефон:</td>
              <td style=\"$td2_style\">$phone</td>
            </tr>";
	}
	if($fio !== ''){
        $msg_fio = "
            <tr>
              <td style=\"$td1_style\">ФИО:</td>
              <td style=\"$td2_style\">$fio</td>
            </tr>";
	}
	if($product !== ''){
        $msg_product = "
            <tr>
              <td style=\"$td1_style\">Продукт:</td>
              <td style=\"$td2_style\">$product</td>
            </tr>";
	}
	if($message !== ''){
        $msg_message = "
            <tr>
              <td style=\"$td1_style\">Сообщение:</td>
              <td style=\"$td2_style\">$message</td>
            </tr>";
    }

	$mail = new PHPMailer();
	$mail->From = 'orderFromSite@'.$_SERVER['SERVER_NAME']; // от кого
	$mail->FromName = $sitename; // от кого
	foreach ($maillist as $mail_send) {
		$mail->AddAddress($mail_send); // кому - адрес, Имя
	}
	$mail->IsHTML(true); // выставляем формат письма HTML
	if($submit == 'subscribe') {
		$subj = $siteName.' / Подключение пользователя / '.$senddate; // тема письма
		$mailbody = $msg_head.$msg_webresource.$msg_phone.$msg_fio.$msg_product.$msg_message.$msg_foot; // тело письма
	}
	if (isset($_FILES['file'])) {
		$tmp_attachment = array_combine($_FILES['file']['tmp_name'],$_FILES['file']['name']);
		foreach ($tmp_attachment as $k=>$v) {
			$mail->AddAttachment($k, $v);
		}
	}
	$mail->Subject = $subj;
	$mail->Body = $mailbody;
	if ($mail->Send()) { echo json_encode(true); } else { echo json_encode($mail->ErrorInfo); }
?>
