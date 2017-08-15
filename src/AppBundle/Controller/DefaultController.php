<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{



    /**
     * @Route("/", name="home")
     */
    public function homepageAction(Request $request){
        return $this->render('home.html.twig');
    }
}
