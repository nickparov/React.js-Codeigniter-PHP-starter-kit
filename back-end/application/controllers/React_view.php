<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class React_View extends CI_Controller {

	public function index()
	{
		// Loading our model
		$this->load->model('Your_model');

		// Getting data from MYSQL database
		$data = [
			'last_save' => $this->Your_model->your_func()
 		];

		// Loading our main view and passing retrieved data to it
		$this->load->view('index', $data);
	}
}
