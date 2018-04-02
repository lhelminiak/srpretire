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
     * @Route("/who-we-are/team/{slug}", name="employee-page")
     */
    public function whoWeAreTeamMemberAction(Request $request, $slug){
        if($slug == 1){
            return $this->render('employee_page/employee_1.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 2){
            return $this->render('employee_page/employee_2.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 3){
            return $this->render('employee_page/employee_3.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 4){
            return $this->render('employee_page/employee_4.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 5){
            return $this->render('employee_page/employee_5.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 6){
            return $this->render('employee_page/employee_6.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 7){
            return $this->render('employee_page/employee_7.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 8){
            return $this->render('employee_page/employee_8.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 9){
            return $this->render('employee_page/employee_9.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 10){
            return $this->render('employee_page/employee_10.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 11){
            return $this->render('employee_page/employee_11.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 12){
            return $this->render('employee_page/employee_12.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 13){
            return $this->render('employee_page/employee_13.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 14){
            return $this->render('employee_page/employee_14.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 15){
            return $this->render('employee_page/employee_15.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 16){
            return $this->render('employee_page/employee_16.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 17){
            return $this->render('employee_page/employee_17.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 18){
            return $this->render('employee_page/employee_18.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 19){
            return $this->render('employee_page/employee_19.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 20){
            return $this->render('employee_page/employee_20.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 21){
            return $this->render('employee_page/employee_21.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 22){
            return $this->render('employee_page/employee_22.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 23){
            return $this->render('employee_page/employee_23.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 24){
            return $this->render('employee_page/employee_24.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 25){
            return $this->render('employee_page/employee_25.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 26){
            return $this->render('employee_page/employee_26.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 27){
            return $this->render('employee_page/employee_27.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 28){
            return $this->render('employee_page/employee_28.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 29){
            return $this->render('employee_page/employee_29.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 30){
            return $this->render('employee_page/employee_30.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 31){
            return $this->render('employee_page/employee_31.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 32){
            return $this->render('employee_page/employee_32.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 33){
            return $this->render('employee_page/employee_33.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 34){
            return $this->render('employee_page/employee_34.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 35){
            return $this->render('employee_page/employee_35.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 36){
            return $this->render('employee_page/employee_36.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 37){
            return $this->render('employee_page/employee_37.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 38){
            return $this->render('employee_page/employee_38.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 39){
            return $this->render('employee_page/employee_39.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 40){
            return $this->render('employee_page/employee_40.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 41){
            return $this->render('employee_page/employee_41.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 42){
            return $this->render('employee_page/employee_42.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 43){
            return $this->render('employee_page/employee_43.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 44){
            return $this->render('employee_page/employee_44.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 45){
            return $this->render('employee_page/employee_45.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else if($slug == 46){
            return $this->render('employee_page/employee_46.html.twig', array("title" => "SRP - Who We Are", "number" => $slug));
        }else{
            return $this->render('who_we_are/who-we-are.html.twig', array("title" => "SRP - Who We Are"));
        }




    }
    /**
     * @Route("/who-we-are", name="who-we-are")
     */
    public function whoWeArePageAction(Request $request){
        return $this->render('who_we_are/who-we-are.html.twig', array("title" => "SRP - Who We Are"));
    }



    /**
     * @Route("/what-we-do", name="what-we-do")
     */
    public function whatWeDoPageAction(Request $request){
        return $this->render('what_we_do/what-we-do.html.twig', array("title" => "SRP - What We Do"));
    }

    /**
     * @Route("/how-we-do-it", name="how-we-do-it")
     */
    public function howWeDoItPageAction(Request $request){
        return $this->render('how_we_do_it/how-we-do-it.html.twig', array("title" => "SRP - How We Do It"));
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
        return $this->render('what_we_do/retirement_plan_consulting_page/retirement-plan-consulting.html.twig', array("title" => "SRP - Retirement Plan Consulting"));
    }

    /**
     * @Route("/executive-benefits", name="executive-benefits")
     */
    public function executiveBenefitsPageAction(Request $request){
        return $this->render('what_we_do/executive_benefits_page/executive-benefits.html.twig', array("title" => "SRP - Executive Benefits"));
    }


    /**
     * @Route("/srp-as-investment-fiduciary", name="srp-as-investment-fiduciary")
     */
    public function srpInvestmentPageAction(Request $request){
        return $this->render('what_we_do/srp_as_investment_fiduciary/srp_as_investment_fiduciary.html.twig', array("title" => "SRP - My Account"));
    }

    /**
     * @Route("/endowments-foundations", name="endowments-foundations")
     */
    public function endowmentsFoundationsPageAction(Request $request){
        return $this->render('what_we_do/endowments_and_foundations_page/endowments_and_foundations.html.twig', array("title" => "SRP - Endowments and Foundations"));
    }

    /**
     * @Route("/hsa", name="hsa")
     */
    public function HSAPageAction(Request $request){
        return $this->render('what_we_do/hsa/hsa.html.twig', array("title" => "SRP - HSA"));
    }


    /*
     *  END What We Do processes sub sections
     */



    /**
     * @Route("/your-account", name="your-account")
     */
    public function yourAccountPageAction(Request $request){
        return $this->render('your_account/your-account.html.twig', array("title" => "SRP - My Account"));
    }


    /**
     * @Route("/lets-connect", name="lets-connect")
     */
    public function letsConnectPageAction(Request $request){
        return $this->render('lets_connect/lets_connect.html.twig', array("title" => "SRP-Let's Connect"));
    }

    /**
     * @Route("/join-team", name="join-team")
     */
    public function joinTeamPageAction(Request $request){
        return $this->render('lets_connect/join_team/join_team.html.twig', array("title" => "SRP - Join Team"));
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
        return $this->render('submit_rfp/submit-RFP.html.twig', array("title" => "SRP-Submit RFP"));
    }

//    /**
//     * @Route("/test", name="test")
//     */
//    public function testPageAction(Request $request){
//        return $this->render('test.html.twig', array("title" => "SRP-Test"));
//    }
}
