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


    /*
     *  START Main Three Sections
     */

    /**
     * @Route("/who-we-are", name="who-we-are")
     */
    public function whoWeArePageAction(Request $request){
        return $this->render('who-we-are.html.twig', array("title" => "SRP-Who We Are"));
    }

    /**
     * @Route("/what-we-do", name="what-we-do")
     */
    public function whatWeDoPageAction(Request $request){
        return $this->render('what-we-do.html.twig', array("title" => "SRP-What We Do"));
    }

    /**
     * @Route("/how-we-do-it", name="how-we-do-it")
     */
    public function howWeDoItPageAction(Request $request){
        return $this->render('how-we-do-it.html.twig', array("title" => "SRP-How We Do It"));
    }

    /*
     *  END Main Three Sections
     */


    /*
     *  START What We Do processes sub sections
     */

    /**
     * @Route("/retirement-plan-consulting", name="retirement-plan-consulting")
     */
    public function retirementPlanConsultingPageAction(Request $request){
        return $this->render('what-we-do-processes/retirement-plan-consulting.html.twig', array("title" => "SRP-Retirement Plan Consulting"));
    }

    /**
     * @Route("/executive-benefits", name="executive-benefits")
     */
    public function executiveBenefitsPageAction(Request $request){
        return $this->render('what-we-do-processes/executive-benefits.html.twig', array("title" => "SRP-Executive Benefits"));
    }

    /**
     * @Route("/endowments-foundations", name="endowments-foundations")
     */
    public function endowmentsFoundationsPageAction(Request $request){
        return $this->render('what-we-do-processes/endowments-foundations.html.twig', array("title" => "SRP-Endowments and Foundations"));
    }

    /**
     * @Route("/HSA", name="HSA")
     */
    public function HSAPageAction(Request $request){
        return $this->render('what-we-do-processes/executive-benefits.html.twig', array("title" => "SRP-HSA"));
    }

    /**
     * @Route("/endowments-foundations", name="endowments-foundations")
     */
    public function wealthManagementPageAction(Request $request){
        return $this->render('what-we-do-processes/executive-benefits.html.twig', array("title" => "SRP-Wealth Management"));
    }

    /*
     *  END What We Do processes sub sections
     */



    /**
     * @Route("/your-account", name="your-account")
     */
    public function yourAccountPageAction(Request $request){
        return $this->render('your-account.html.twig', array("title" => "SRP-My Account"));
    }


    /**
     * @Route("/lets-connect", name="lets-connect")
     */
    public function letsConnectPageAction(Request $request){
        return $this->render('connect.html.twig', array("title" => "SRP-Let's Connect"));
    }

    /**
     * @Route("/submit-rfp", name="submit-rfp")
     */
    public function submitRfpPageAction(Request $request){
        return $this->render('submit_RFP.html.twig', array("title" => "SRP-Submit RFP"));
    }

    /**
     * @Route("/test", name="test")
     */
    public function testPageAction(Request $request){
        return $this->render('test.html.twig', array("title" => "SRP-Test"));
    }
}
