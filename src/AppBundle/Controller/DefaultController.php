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
        return $this->render('home_page/home_base.html.twig');
    }


    /*
     *  START Main Three Sections
     */

    /**
     * @Route("/who-we-are", name="who-we-are")
     */
    public function whoWeArePageAction(Request $request){
        return $this->render('who_we_are_page/who-we-are.html.twig', array("title" => "SRP - Who We Are"));
    }

    /**
     * @Route("/what-we-do", name="what-we-do")
     */
    public function whatWeDoPageAction(Request $request){
        return $this->render('what_we_do_page/what-we-do.html.twig', array("title" => "SRP - What We Do"));
    }

    /**
     * @Route("/how-we-do-it", name="how-we-do-it")
     */
    public function howWeDoItPageAction(Request $request){
        return $this->render('how_we_do_it_page/how-we-do-it.html.twig', array("title" => "SRP - How We Do It"));
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
        return $this->render('pages/retirement_plan_consulting_page/retirement-plan-consulting.html.twig', array("title" => "SRP - Retirement Plan Consulting"));
    }

    /**
     * @Route("/executive-benefits", name="executive-benefits")
     */
    public function executiveBenefitsPageAction(Request $request){
        return $this->render('pages/executive_benefits_page/executive-benefits.html.twig', array("title" => "SRP - Executive Benefits"));
    }


    /**
     * @Route("/srp-as-investment-fiduciary", name="srp-as-investment-fiduciary")
     */
    public function srpInvestmentPageAction(Request $request){
        return $this->render('pages/srp_as_investment_fiduciary/srp_as_investment_fiduciary.html.twig', array("title" => "SRP - My Account"));
    }

    /**
     * @Route("/endowments-foundations", name="endowments-foundations")
     */
    public function endowmentsFoundationsPageAction(Request $request){
        return $this->render('pages/endowments_and_foundations_page/endowments_and_foundations.html.twig', array("title" => "SRP - Endowments and Foundations"));
    }

    /**
     * @Route("/hsa", name="hsa")
     */
    public function HSAPageAction(Request $request){
        return $this->render('pages/hsa/hsa.html.twig', array("title" => "SRP - HSA"));
    }


    /*
     *  END What We Do processes sub sections
     */



    /**
     * @Route("/your-account", name="your-account")
     */
    public function yourAccountPageAction(Request $request){
        return $this->render('your-account.html.twig', array("title" => "SRP - My Account"));
    }


    /**
     * @Route("/lets-connect", name="lets-connect")
     */
    public function letsConnectPageAction(Request $request){
        return $this->render('pages/lets_connect_page/lets_connect.html.twig', array("title" => "SRP-Let's Connect"));
    }

    /**
     * @Route("/join-team", name="join-team")
     */
    public function joinTeamPageAction(Request $request){
        return $this->render('pages/join_team/join_team.html.twig', array("title" => "SRP - Join Team"));
    }

    /**
     * @Route("/open-office", name="open-office")
     */
    public function openOfficePageAction(Request $request){
        return $this->render('pages/open_office/open_office.html.twig', array("title" => "SRP - Become an SRP Advisor"));
    }

    /**
     * @Route("/submit-rfp", name="submit-rfp")
     */
    public function submitRfpPageAction(Request $request){
        return $this->render('pages/submit_rfp_page/submit-RFP.html.twig', array("title" => "SRP-Submit RFP"));
    }

    /**
     * @Route("/test", name="test")
     */
    public function testPageAction(Request $request){
        return $this->render('test.html.twig', array("title" => "SRP-Test"));
    }
}
