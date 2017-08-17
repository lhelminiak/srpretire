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


    /**
     * @Route("/people", name="people")
     */
    public function peoplePageAction(Request $request){
        return $this->render('people.html.twig');
    }

    /**
     * @Route("/processes", name="processes")
     */
    public function proccessesPageAction(Request $request){
        return $this->render('processes.html.twig');
    }

    /**
     * @Route("/retirement-plan-consulting", name="retirement-plan-consulting")
     */
    public function retirementPlanConsultingPageAction(Request $request){
        return $this->render('retirement-plan-consulting.html.twig');
    }
}
