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

    /**
     * @Route("/executive-benefits", name="executive-benefits")
     */
    public function executiveBenefitsPageAction(Request $request){
        return $this->render('executive-benefits.html.twig');
    }


    /**
     * @Route("/technology", name="technology")
     */
    public function technologyPageAction(Request $request){
        return $this->render('technology.html.twig');
    }

    /**
     * @Route("/your-account", name="your-account")
     */
    public function yourAccountPageAction(Request $request){
        return $this->render('your-account.html.twig');
    }

    /**
     * @Route("/retirement-plan-consulting", name="retirement-plan-consulting")
     */
    public function howWeDoItPageAction(Request $request){
        return $this->render('retirement-plan-consulting.html.twig');
    }


    /**
     * @Route("/lets-connect", name="lets-connect")
     */
    public function letsConnectPageAction(Request $request){
        return $this->render('connect.html.twig');
    }
}
