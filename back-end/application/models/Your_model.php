<?php

class Saves_model extends CI_Model {

    public function your_func(){
    
        // simple codeigniter database request
        $this->db->order_by('id', 'DESC');
        $query = $this->db->get('saves');
        return $query->row();

    }
}

?>