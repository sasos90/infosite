<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Section extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
    }
    
    public function load()
    {
        $sectionPath = strtolower($this->input->post("controller")) . "/" . strtolower($this->input->post("method")) . "/sections/" . $this->input->post("section");
        echo json_encode([
            "status"    =>  "success",
            "data"      =>  [
                "sectionHtml"   =>  $this->load->view($sectionPath, [], true)
            ]
        ]);
        exit();
    }
}
