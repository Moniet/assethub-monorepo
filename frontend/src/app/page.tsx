import PricingSection from "@/components/PricingSection"
import SignUpForm from "@/components/SignUpForm"
import {
  ArchiveIcon,
  BellIcon,
  BookmarkFilledIcon,
  BookmarkIcon,
  CaretRightIcon,
  ClipboardCopyIcon,
  LightningBoltIcon,
  LockClosedIcon,
  MagnifyingGlassIcon
} from "@radix-ui/react-icons"
import { FormEventHandler } from "react"
import Balance from "react-wrap-balancer"
import { CgLinear } from "react-icons/cg"

const GoogleDriveIcon = () => {
  return (
    <svg width="26" height="23" viewBox="0 0 26 23" fill="none">
      <g clip-path="url(#clip0_98_1113)">
        <path
          d="M2.05427 19.3208L3.16645 21.2418C3.39755 21.6463 3.72973 21.9641 4.11973 22.1952C5.23683 20.7772 6.01427 19.6891 6.45244 18.9308C6.89702 18.1614 7.44345 16.9577 8.09175 15.32C6.34457 15.0899 5.0206 14.975 4.11982 14.975C3.2552 14.975 1.93123 15.0899 0.147705 15.32C0.147705 15.7677 0.263257 16.2154 0.494362 16.6199L2.05427 19.3208Z"
          fill="#0066DA"
        />
        <path
          d="M21.3909 22.1952C21.781 21.9641 22.1132 21.6463 22.3442 21.2419L22.8064 20.4475L25.0164 16.6199C25.2432 16.2242 25.3626 15.7761 25.3629 15.32C23.569 15.0899 22.2475 14.975 21.3982 14.975C20.4854 14.975 19.1638 15.0899 17.4333 15.32C18.074 16.9667 18.6132 18.1703 19.0511 18.9308C19.4927 19.6981 20.2726 20.7862 21.3909 22.1952Z"
          fill="#EA4335"
        />
        <path
          d="M12.756 7.23383C14.0484 5.67294 14.9391 4.46924 15.428 3.62294C15.8218 2.94145 16.2551 1.85331 16.728 0.35862C16.338 0.127515 15.8903 0.0119629 15.428 0.0119629H10.0839C9.62166 0.0119629 9.17404 0.141996 8.78394 0.35862C9.38544 2.07289 9.89592 3.29294 10.3152 4.01866C10.7786 4.82073 11.5922 5.89242 12.756 7.23383Z"
          fill="#00832D"
        />
        <path
          d="M17.4218 15.3198H8.09247L4.12109 22.1941C4.51094 22.4252 4.95861 22.5407 5.42075 22.5407H20.0936C20.5557 22.5407 21.0035 22.4107 21.3933 22.194L17.4219 15.3198H17.4218Z"
          fill="#2684FC"
        />
        <path
          d="M12.7553 7.23317L8.78396 0.359009C8.39392 0.590081 8.06179 0.907732 7.83071 1.31216L0.494314 14.0208C0.267489 14.4165 0.148005 14.8645 0.147705 15.3206H8.09065L12.7553 7.23317Z"
          fill="#00AC47"
        />
        <path
          d="M21.3455 7.66655L17.6772 1.31216C17.4462 0.907732 17.114 0.590081 16.7241 0.359009L12.7527 7.23326L17.4173 15.3207H25.3458C25.3458 14.8729 25.2303 14.4254 24.9992 14.0209L21.3455 7.66655Z"
          fill="#FFBA00"
        />
      </g>
      <defs>
        <clipPath id="clip0_98_1113">
          <rect
            width="25.2151"
            height="22.5557"
            fill="white"
            transform="translate(0.147705 0.0119629)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
const DropboxIcon = () => {
  return (
    <svg width="26" height="23" viewBox="0 0 26 23" fill="none">
      <path
        d="M6.85856 0.938477L0.594482 4.9293L6.85856 8.92023L13.1236 4.9293L6.85856 0.938477ZM19.3882 0.938477L13.1236 4.92969L19.3882 8.92091L25.6529 4.92969L19.3882 0.938477ZM0.594482 12.9117L6.85856 16.9027L13.1236 12.9117L6.85856 8.92091L0.594482 12.9117ZM19.3882 8.92091L13.1236 12.9121L19.3882 16.9032L25.6528 12.9121L19.3882 8.92091ZM6.85905 18.2415L13.1241 22.2324L19.3882 18.2415L13.1241 14.2507L6.85905 18.2415Z"
        fill="#0061FF"
      />
    </svg>
  )
}
const OneDriveIcon = () => {
  return (
    <svg width="31" height="20" viewBox="0 0 31 20" fill="none">
      <g clip-path="url(#clip0_98_1131)">
        <path
          d="M18.3989 13.8158L24.5118 7.96991C23.2421 3.01875 18.199 0.0345129 13.2479 1.30435C11.0183 1.87614 9.08186 3.25822 7.81641 5.18083C7.91092 5.17852 18.3989 13.8158 18.3989 13.8158Z"
          fill="#0364B8"
        />
        <path
          d="M11.7987 6.28175L11.7985 6.28279C10.6304 5.55934 9.28331 5.17696 7.90937 5.17884C7.87767 5.17884 7.84644 5.18081 7.81474 5.18115C3.72806 5.23182 0.456129 8.58589 0.506682 12.6727C0.52504 14.1551 0.988226 15.5978 1.83621 16.8138L10.9941 15.6669L18.0153 10.0054L11.7987 6.28175Z"
          fill="#0078D4"
        />
        <path
          d="M24.509 7.97024C24.3738 7.96066 24.2384 7.95561 24.1029 7.95508C23.2829 7.95429 22.4714 8.12178 21.7187 8.44719L21.7185 8.44661L18.0142 10.0054L22.0979 15.0499L29.3986 16.8246C30.9742 13.8998 29.8803 10.2516 26.9554 8.67601C26.1996 8.26892 25.3655 8.0282 24.509 7.97024Z"
          fill="#1490DF"
        />
        <path
          d="M1.83643 16.8137C2.51768 17.7932 3.42588 18.5932 4.48347 19.1455C5.54105 19.6978 6.71659 19.986 7.9097 19.9853H24.1044C25.1902 19.9856 26.2559 19.6919 27.1883 19.1354C28.1206 18.5789 28.8849 17.7804 29.4001 16.8245L18.0155 10.0051L1.83643 16.8137Z"
          fill="#28A8EA"
        />
      </g>
      <defs>
        <clipPath id="clip0_98_1131">
          <rect
            width="29.6145"
            height="19.0874"
            fill="white"
            transform="translate(0.799805 0.529297)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

const CloudFlareIcon = () => {
  return (
    <svg width="33" height="15" viewBox="0 0 33 15" fill="none">
      <path
        d="M29.664 9.06084L25.6541 6.76152L24.9625 6.4624L8.55835 6.57454V14.9028H29.664V9.06084Z"
        fill="white"
      />
      <path
        d="M22.369 14.1366C22.5653 13.4635 22.4904 12.8468 22.1633 12.3887C21.8642 11.9682 21.3596 11.7251 20.7518 11.6971L9.24569 11.5477C9.17085 11.5477 9.10552 11.5104 9.06797 11.4543C9.03042 11.3983 9.02116 11.3234 9.03994 11.2486C9.07723 11.1364 9.18937 11.0523 9.31102 11.0428L20.92 10.8934C22.2939 10.8281 23.7895 9.71569 24.3129 8.35101L24.9765 6.6219C25.0045 6.54705 25.0138 6.47247 24.9953 6.39762C24.2478 3.01346 21.2289 0.489868 17.621 0.489868C14.2934 0.489868 11.4707 2.63976 10.4612 5.62141C9.77678 5.11173 8.9271 4.87517 8.07777 4.95785C6.47931 5.1168 5.199 6.39737 5.04005 7.99557C5.00276 8.40683 5.03079 8.80882 5.12415 9.18252C2.51594 9.25737 0.431641 11.3885 0.431641 14.015C0.431641 14.2487 0.450416 14.4823 0.47845 14.7161C0.486495 14.7701 0.513464 14.8194 0.554545 14.8554C0.595625 14.8913 0.648143 14.9115 0.702724 14.9123H21.9393C22.0607 14.9123 22.1731 14.8282 22.2104 14.7065L22.369 14.1366Z"
        fill="#F38020"
      />
      <path
        d="M26.0332 6.74304C25.9303 6.74304 25.8181 6.74304 25.7153 6.7523C25.6404 6.7523 25.5751 6.80837 25.5471 6.88321L25.0985 8.44413C24.9023 9.1172 24.9771 9.73395 25.3043 10.192C25.6034 10.6125 26.108 10.8556 26.7157 10.8836L29.1648 11.033C29.2396 11.033 29.3049 11.0703 29.3425 11.1264C29.3798 11.1825 29.3893 11.2666 29.3705 11.3322C29.3332 11.4443 29.2211 11.5284 29.0994 11.5379L26.547 11.6876C25.1636 11.7529 23.6775 12.8653 23.1541 14.23L22.9671 14.7066C22.9298 14.7999 22.9952 14.8935 23.098 14.8935H31.8655C31.9684 14.8935 32.0618 14.8282 32.0898 14.7253C32.2393 14.1832 32.3236 13.613 32.3236 13.0242C32.3236 9.56575 29.5009 6.74304 26.0332 6.74304Z"
        fill="#FAAE40"
      />
    </svg>
  )
}
const JiraIcon = () => {
  return (
    <svg width="25" height="25" viewBox="0 0 29 29" fill="none">
      <path
        d="M26.9545 0.764648H13.7939C13.7939 4.04495 16.4489 6.70109 19.7301 6.70109H22.1505V9.04343C22.1505 12.3237 24.8066 14.9799 28.0869 14.9799V1.89709C28.0867 1.59682 27.9673 1.30891 27.755 1.09658C27.5426 0.884258 27.2547 0.764875 26.9545 0.764648Z"
        fill="#2684FF"
      />
      <path
        d="M20.432 7.3245H7.27124C7.27124 10.6045 9.92652 13.2607 13.2065 13.2607H15.628V15.603C15.628 18.8833 18.2842 21.5394 21.5645 21.5394V8.45666C21.564 8.15646 21.4446 7.86868 21.2323 7.6564C21.02 7.44413 20.7322 7.32496 20.432 7.3245Z"
        fill="url(#paint0_linear_98_1156)"
      />
      <path
        d="M13.9101 13.8848H0.749268C0.749268 17.1662 3.40426 19.8212 6.68571 19.8212H9.10607V22.1647C9.10607 25.445 11.7622 28.1 15.0422 28.1V15.0183C15.0419 14.7181 14.9226 14.4302 14.7104 14.2177C14.4981 14.0053 14.2103 13.8854 13.9101 13.8848Z"
        fill="url(#paint1_linear_98_1156)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_98_1156"
          x1="21.2906"
          y1="7.33931"
          x2="15.6913"
          y2="13.1129"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.176" stop-color="#0052CC" />
          <stop offset="1" stop-color="#2684FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_98_1156"
          x1="15.1473"
          y1="13.9355"
          x2="8.67325"
          y2="20.2341"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.176" stop-color="#0052CC" />
          <stop offset="1" stop-color="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
const AWSIcon = () => {
  return (
    <svg width="29" height="18" viewBox="0 0 29 18" fill="none">
      <path
        d="M8.50254 6.87598C8.50254 7.21244 8.53901 7.48519 8.60261 7.68522C8.68336 7.91026 8.78058 8.12905 8.89349 8.3398C8.93896 8.41252 8.95709 8.48523 8.95709 8.54894C8.95709 8.63979 8.9026 8.73074 8.78441 8.82169L8.21167 9.20352C8.12983 9.25811 8.048 9.28536 7.97517 9.28536C7.88432 9.28536 7.79337 9.23988 7.70242 9.15804C7.57993 9.0264 7.47035 8.88331 7.37518 8.73074C7.28423 8.57629 7.19328 8.4034 7.09332 8.19436C6.38415 9.03073 5.49307 9.44903 4.42031 9.44903C3.65665 9.44903 3.04744 9.23076 2.6019 8.79445C2.15647 8.35792 1.9292 7.77606 1.9292 7.04877C1.9292 6.27599 2.20195 5.64866 2.75657 5.17588C3.31107 4.7031 4.04759 4.46671 4.98404 4.46671C5.29315 4.46671 5.61137 4.49395 5.94773 4.53943C6.28418 4.5849 6.62965 4.65762 6.99336 4.73946V4.07576C6.99336 3.38472 6.84781 2.90293 6.56594 2.62106C6.27507 2.3392 5.78405 2.20277 5.084 2.20277C4.76577 2.20277 4.43854 2.23923 4.10208 2.32107C3.76573 2.4028 3.43839 2.50287 3.12016 2.63018C2.97472 2.69378 2.86564 2.73014 2.80193 2.74837C2.73833 2.76661 2.69286 2.77562 2.6565 2.77562C2.52918 2.77562 2.46558 2.68466 2.46558 2.49375V2.04821C2.46558 1.90277 2.48382 1.7937 2.52918 1.73009C2.57466 1.66638 2.6565 1.60278 2.78381 1.53918C3.10203 1.37551 3.48386 1.23908 3.92929 1.13C4.37494 1.01181 4.84772 0.95732 5.34774 0.95732C6.42973 0.95732 7.22074 1.20272 7.72988 1.69373C8.2299 2.18464 8.48452 2.93017 8.48452 3.93032V6.87598H8.50276H8.50254ZM4.81125 8.25796C5.11135 8.25796 5.42046 8.20347 5.7477 8.09429C6.07504 7.98521 6.36602 7.78518 6.61142 7.51243C6.75697 7.33975 6.86604 7.14884 6.92053 6.93057C6.97512 6.71241 7.01148 6.44867 7.01148 6.13956V5.75774C6.73576 5.69063 6.4565 5.63903 6.175 5.60318C5.89155 5.56718 5.60612 5.54895 5.32039 5.54859C4.71118 5.54859 4.26575 5.66678 3.96576 5.91229C3.66566 6.1578 3.52022 6.50327 3.52022 6.95781C3.52022 7.38512 3.6293 7.70334 3.85657 7.92161C4.07484 8.14888 4.39306 8.25796 4.81125 8.25796ZM12.112 9.23988C11.9483 9.23988 11.8392 9.21264 11.7665 9.14893C11.6938 9.09444 11.6301 8.96713 11.5756 8.79445L9.43909 1.76645C9.38439 1.58455 9.35715 1.46635 9.35715 1.40275C9.35715 1.25731 9.42987 1.17537 9.57541 1.17537H10.4664C10.6391 1.17537 10.7574 1.20272 10.821 1.26632C10.8937 1.32092 10.9483 1.44823 11.0028 1.62091L12.5302 7.63974L13.9485 1.62091C13.994 1.43911 14.0486 1.32092 14.1212 1.26632C14.194 1.21184 14.3213 1.17548 14.485 1.17548H15.2123C15.385 1.17548 15.5033 1.20272 15.5759 1.26632C15.6487 1.32092 15.7123 1.44823 15.7487 1.62091L17.1853 7.71246L18.7581 1.62091C18.8125 1.43911 18.8763 1.32092 18.9399 1.26632C19.0126 1.21184 19.1308 1.17548 19.2944 1.17548H20.1399C20.2855 1.17548 20.3673 1.2482 20.3673 1.40275C20.3673 1.44823 20.3582 1.4937 20.3491 1.54819C20.34 1.60278 20.3218 1.6755 20.2855 1.77557L18.0943 8.80346C18.0398 8.98536 17.9762 9.10356 17.9033 9.15804C17.8306 9.21264 17.7124 9.249 17.558 9.249H16.7761C16.6033 9.249 16.4851 9.22176 16.4123 9.15804C16.3396 9.09444 16.276 8.97625 16.2396 8.79445L14.8303 2.93017L13.4302 8.78523C13.3848 8.96713 13.3302 9.08533 13.2575 9.14893C13.1848 9.21264 13.0575 9.23988 12.8939 9.23988H12.1119H12.112ZM23.795 9.48539C23.3222 9.48539 22.8494 9.43079 22.3949 9.32172C21.9402 9.21264 21.5857 9.09434 21.3493 8.95812C21.2038 8.87618 21.1037 8.78533 21.0675 8.7035C21.0321 8.62325 21.0135 8.53659 21.0129 8.44887V7.98521C21.0129 7.7943 21.0856 7.70334 21.222 7.70334C21.2777 7.70355 21.333 7.71279 21.3857 7.73069C21.4402 7.74893 21.522 7.78518 21.613 7.82154C21.9341 7.96278 22.2693 8.06946 22.613 8.13977C22.9692 8.21204 23.3316 8.24858 23.695 8.24884C24.2678 8.24884 24.7133 8.14888 25.0224 7.94885C25.3315 7.74882 25.4952 7.45794 25.4952 7.08513C25.4952 6.83061 25.4133 6.62146 25.2497 6.44867C25.086 6.27599 24.7769 6.12144 24.3315 5.97589L23.0131 5.56682C22.3494 5.35768 21.8585 5.04857 21.5584 4.63939C21.2584 4.23933 21.1038 3.7939 21.1038 3.32112C21.1038 2.93929 21.1857 2.60283 21.3493 2.31184C21.5129 2.02097 21.7312 1.76645 22.0039 1.56642C22.2767 1.35727 22.5858 1.20272 22.9495 1.09364C23.3131 0.984563 23.6949 0.939087 24.095 0.939087C24.295 0.939087 24.5041 0.948204 24.7042 0.975446C24.9133 1.00269 25.1042 1.03905 25.2952 1.07541C25.4769 1.12088 25.6497 1.16636 25.8134 1.22095C25.9771 1.27544 26.1043 1.33003 26.1952 1.38452C26.3225 1.45734 26.4134 1.53006 26.468 1.6119C26.5226 1.68462 26.5498 1.78458 26.5498 1.91189V2.3392C26.5498 2.53011 26.4771 2.63018 26.3407 2.63018C26.268 2.63018 26.1498 2.59371 25.9953 2.52099C25.4769 2.2846 24.8951 2.16641 24.2496 2.16641C23.7314 2.16641 23.3222 2.24824 23.0403 2.42103C22.7586 2.59371 22.613 2.85745 22.613 3.23016C22.613 3.48479 22.704 3.70294 22.8858 3.87573C23.0677 4.04841 23.404 4.2212 23.8859 4.37575L25.177 4.78493C25.8315 4.99408 26.3043 5.28496 26.5862 5.65767C26.868 6.03049 27.0045 6.45779 27.0045 6.93057C27.0045 7.32152 26.9225 7.6761 26.768 7.98521C26.6044 8.29432 26.3862 8.56707 26.1043 8.78533C25.8224 9.01261 25.4861 9.17628 25.0951 9.29447C24.6859 9.42179 24.2586 9.48539 23.795 9.48539Z"
        fill="#252F3E"
      />
      <path
        d="M25.513 13.9041C22.5219 16.1134 18.1759 17.2862 14.4392 17.2862C9.20227 17.2862 4.48369 15.3496 0.919715 12.1311C0.637848 11.8766 0.892365 11.5312 1.22872 11.7311C5.08368 13.9678 9.83873 15.3224 14.7574 15.3224C18.0759 15.3224 21.7217 14.6315 25.0767 13.2131C25.5767 12.9857 26.004 13.5405 25.513 13.9041ZM26.7586 12.4857C26.3768 11.9948 24.2311 12.2493 23.2583 12.3675C22.9673 12.404 22.9218 12.1494 23.1855 11.9585C24.8948 10.7583 27.7042 11.1038 28.0314 11.5038C28.3588 11.913 27.9405 14.7223 26.3403 16.0679C26.0949 16.2771 25.8586 16.168 25.9676 15.8953C26.3312 14.9951 27.1405 12.9676 26.7586 12.4857Z"
        fill="#FF9900"
      />
    </svg>
  )
}
const BoxIcon = () => {
  return (
    <svg
      id="Layer_1"
      width="25px"
      height="30px"
      viewBox="0 0 40 21.6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style
        type="text/css"
        dangerouslySetInnerHTML={{ __html: `.box-logo-svg{fill:#0061d5;}` }}
      />
      <path
        fill="#0061d5"
        d="M39.7 19.2c.5.7.4 1.6-.2 2.1-.7.5-1.7.4-2.2-.2l-3.5-4.5-3.4 4.4c-.5.7-1.5.7-2.2.2-.7-.5-.8-1.4-.3-2.1l4-5.2-4-5.2c-.5-.7-.3-1.7.3-2.2.7-.5 1.7-.3 2.2.3l3.4 4.5L37.3 7c.5-.7 1.4-.8 2.2-.3.7.5.7 1.5.2 2.2L35.8 14l3.9 5.2zm-18.2-.6c-2.6 0-4.7-2-4.7-4.6 0-2.5 2.1-4.6 4.7-4.6s4.7 2.1 4.7 4.6c-.1 2.6-2.2 4.6-4.7 4.6zm-13.8 0c-2.6 0-4.7-2-4.7-4.6 0-2.5 2.1-4.6 4.7-4.6s4.7 2.1 4.7 4.6c0 2.6-2.1 4.6-4.7 4.6zM21.5 6.4c-2.9 0-5.5 1.6-6.8 4-1.3-2.4-3.9-4-6.9-4-1.8 0-3.4.6-4.7 1.5V1.5C3.1.7 2.4 0 1.6 0 .7 0 0 .7 0 1.5v12.6c.1 4.2 3.5 7.5 7.7 7.5 3 0 5.6-1.7 6.9-4.1 1.3 2.4 3.9 4.1 6.8 4.1 4.3 0 7.8-3.4 7.8-7.7.1-4.1-3.4-7.5-7.7-7.5z"
      />
    </svg>
  )
}

const Gutter = ({ children, className = "" }: any) => {
  return (
    <div className={"xs:px-8 sm:px-8 md:px-[10%] " + className}>{children}</div>
  )
}
const SlackIcon = () => {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
      <g clipPath="url(#clip0_55_369)">
        <path
          d="M3.97468 9.50724C3.97468 10.3456 3.29094 11.0304 2.45246 11.0304C1.61409 11.0304 0.929443 10.3456 0.929443 9.50724C0.929443 8.66884 1.61421 7.98405 2.45258 7.98405H3.97479L3.97468 9.50724ZM4.74202 9.50724C4.74202 8.66884 5.42678 7.98405 6.26515 7.98405C7.10352 7.98405 7.78828 8.66873 7.78828 9.50724V13.3201C7.78828 14.1585 7.10363 14.8432 6.26515 14.8432C5.42678 14.8432 4.74202 14.1585 4.74202 13.3201V9.50724Z"
          fill="#DE1C59"
        />
        <path
          d="M6.26515 3.38471C5.42678 3.38471 4.74202 2.70095 4.74202 1.86244C4.74202 1.02404 5.42678 0.339371 6.26515 0.339371C7.10352 0.339371 7.78828 1.02416 7.78828 1.86255V3.38482L6.26515 3.38471ZM6.26515 4.15208C7.10352 4.15208 7.78828 4.83686 7.78828 5.67526C7.78828 6.51366 7.10363 7.19844 6.26515 7.19844H2.45246C1.61409 7.19844 0.929443 6.51377 0.929443 5.67526C0.929443 4.83686 1.61421 4.15208 2.45258 4.15208H6.26515Z"
          fill="#35C5F0"
        />
        <path
          d="M12.3881 5.67526C12.3881 4.83686 13.0718 4.15208 13.9103 4.15208C14.7487 4.15208 15.4334 4.83686 15.4334 5.67526C15.4334 6.51366 14.7487 7.19844 13.9103 7.19844H12.3881V5.67526ZM11.6207 5.67526C11.6207 6.51366 10.936 7.19844 10.0976 7.19844C9.25923 7.19844 8.57446 6.51377 8.57446 5.67526V1.86244C8.57446 1.02404 9.25911 0.339371 10.0976 0.339371C10.936 0.339371 11.6207 1.02416 11.6207 1.86255V5.67526Z"
          fill="#2EB57D"
        />
        <path
          d="M10.0976 11.7978C10.936 11.7978 11.6207 12.4815 11.6207 13.3201C11.6207 14.1585 10.936 14.8432 10.0976 14.8432C9.25923 14.8432 8.57446 14.1585 8.57446 13.3201V11.7978H10.0976ZM10.0976 11.0304C9.25923 11.0304 8.57446 10.3456 8.57446 9.50724C8.57446 8.66884 9.25911 7.98405 10.0976 7.98405H13.9103C14.7487 7.98405 15.4334 8.66873 15.4334 9.50724C15.4334 10.3456 14.7487 11.0304 13.9103 11.0304H10.0976Z"
          fill="#EBB02E"
        />
      </g>
      <defs>
        <clipPath id="clip0_55_369">
          <rect
            width="14.64"
            height="14.6405"
            fill="white"
            transform="translate(0.855713 0.267273)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

const SlackPill = () => {
  return (
    <div className="flex xs:text-[8px] md:text-[12px] font-body border border-[##6366F11A] bg-[#6366F11A] text-[#507EF1] rounded-full px-3 py-2 md:absolute xs:relative display-block bottom-0  right-[0] w-fit gap-2 font-medium items-center tracking-wide md:translate-x-[40px] md:-translate-y-[100%] lg:-translate-y-[150%] whitespace-nowrap">
      <SlackIcon /> Slack App
    </div>
  )
}

const Logo = () => {
  return (
    <div className="w-20 flex items-center">
      <svg className="w-full" viewBox="0 0 88 17" fill="none">
        <path
          d="M9.54111 2.932V0.248H12.5991V2.932H9.54111ZM2.58911 16V7.31H0.521105V5.242H2.58911V5.22C2.58911 3.69467 2.98511 2.54333 3.77711 1.766C4.58377 0.988666 5.83044 0.548666 7.51711 0.446L8.48511 0.401999L8.61711 2.426L7.75911 2.47C6.87911 2.52867 6.25577 2.74867 5.88911 3.13C5.52244 3.49667 5.33911 4.04667 5.33911 4.78V5.242H12.4451V16H9.69511V7.31H5.33911V16H2.58911ZM20.1523 16.22C18.8763 16.22 17.9303 15.8753 17.3143 15.186C16.713 14.482 16.4123 13.4553 16.4123 12.106V0.489999H19.1623V11.974C19.1623 13.294 19.7197 13.954 20.8343 13.954C20.9957 13.954 21.157 13.9467 21.3183 13.932C21.4797 13.9173 21.6337 13.888 21.7803 13.844L21.7363 16.022C21.2083 16.154 20.6803 16.22 20.1523 16.22ZM29.7323 16.22C28.515 16.22 27.4663 15.9927 26.5863 15.538C25.7063 15.0833 25.0243 14.438 24.5403 13.602C24.071 12.766 23.8363 11.776 23.8363 10.632C23.8363 9.51733 24.0636 8.542 24.5183 7.706C24.9876 6.87 25.6256 6.21733 26.4323 5.748C27.2536 5.264 28.185 5.022 29.2263 5.022C30.7516 5.022 31.9543 5.506 32.8343 6.474C33.729 7.442 34.1763 8.762 34.1763 10.434V11.248H26.4763C26.6816 13.1693 27.7816 14.13 29.7763 14.13C30.3776 14.13 30.979 14.042 31.5803 13.866C32.1816 13.6753 32.7316 13.382 33.2303 12.986L34.0003 14.834C33.487 15.2593 32.8416 15.5967 32.0643 15.846C31.287 16.0953 30.5096 16.22 29.7323 16.22ZM29.3363 6.892C28.5296 6.892 27.877 7.14133 27.3783 7.64C26.8796 8.13867 26.579 8.81333 26.4763 9.664H31.8883C31.8296 8.76933 31.5803 8.08733 31.1403 7.618C30.715 7.134 30.1136 6.892 29.3363 6.892ZM43.6581 16.22C42.8661 16.22 42.1548 16.044 41.5241 15.692C40.9081 15.34 40.4461 14.8633 40.1381 14.262V16H37.4541V0.489999H40.2041V6.826C40.5268 6.28333 40.9888 5.85067 41.5901 5.528C42.2061 5.19067 42.8955 5.022 43.6581 5.022C44.6115 5.022 45.4401 5.24933 46.1441 5.704C46.8481 6.15867 47.3981 6.804 47.7941 7.64C48.1901 8.46133 48.3881 9.45133 48.3881 10.61C48.3881 11.754 48.1901 12.7513 47.7941 13.602C47.3981 14.438 46.8408 15.0833 46.1221 15.538C45.4181 15.9927 44.5968 16.22 43.6581 16.22ZM42.8881 14.13C43.7095 14.13 44.3695 13.8367 44.8681 13.25C45.3668 12.6487 45.6161 11.7687 45.6161 10.61C45.6161 9.43667 45.3668 8.564 44.8681 7.992C44.3695 7.40533 43.7095 7.112 42.8881 7.112C42.0668 7.112 41.4068 7.40533 40.9081 7.992C40.4095 8.564 40.1601 9.43667 40.1601 10.61C40.1601 11.7687 40.4095 12.6487 40.9081 13.25C41.4068 13.8367 42.0668 14.13 42.8881 14.13ZM55.4855 16.22C54.2095 16.22 53.2635 15.8753 52.6475 15.186C52.0462 14.482 51.7455 13.4553 51.7455 12.106V0.489999H54.4955V11.974C54.4955 13.294 55.0529 13.954 56.1675 13.954C56.3289 13.954 56.4902 13.9467 56.6515 13.932C56.8129 13.9173 56.9669 13.888 57.1135 13.844L57.0695 16.022C56.5415 16.154 56.0135 16.22 55.4855 16.22ZM64.6695 16.22C63.5548 16.22 62.5868 15.9927 61.7655 15.538C60.9442 15.0833 60.3062 14.438 59.8515 13.602C59.3968 12.7513 59.1695 11.754 59.1695 10.61C59.1695 9.466 59.3968 8.476 59.8515 7.64C60.3062 6.804 60.9442 6.15867 61.7655 5.704C62.5868 5.24933 63.5548 5.022 64.6695 5.022C65.7842 5.022 66.7522 5.24933 67.5735 5.704C68.3948 6.15867 69.0328 6.804 69.4875 7.64C69.9422 8.476 70.1695 9.466 70.1695 10.61C70.1695 11.754 69.9422 12.7513 69.4875 13.602C69.0328 14.438 68.3948 15.0833 67.5735 15.538C66.7522 15.9927 65.7842 16.22 64.6695 16.22ZM64.6695 14.13C65.4908 14.13 66.1508 13.8367 66.6495 13.25C67.1482 12.6487 67.3975 11.7687 67.3975 10.61C67.3975 9.43667 67.1482 8.564 66.6495 7.992C66.1508 7.40533 65.4908 7.112 64.6695 7.112C63.8482 7.112 63.1882 7.40533 62.6895 7.992C62.1908 8.564 61.9415 9.43667 61.9415 10.61C61.9415 11.7687 62.1908 12.6487 62.6895 13.25C63.1882 13.8367 63.8482 14.13 64.6695 14.13ZM78.5113 16.22C77.3819 16.22 76.3993 15.9927 75.5633 15.538C74.7273 15.0687 74.0819 14.4087 73.6273 13.558C73.1726 12.7073 72.9453 11.71 72.9453 10.566C72.9453 9.422 73.1726 8.43933 73.6273 7.618C74.0819 6.782 74.7273 6.144 75.5633 5.704C76.3993 5.24933 77.3819 5.022 78.5113 5.022C79.2006 5.022 79.8826 5.132 80.5573 5.352C81.2319 5.572 81.7893 5.88 82.2293 6.276L81.4153 8.19C81.0339 7.85267 80.6013 7.596 80.1173 7.42C79.6479 7.244 79.1933 7.156 78.7533 7.156C77.7999 7.156 77.0593 7.45667 76.5313 8.058C76.0179 8.64467 75.7613 9.488 75.7613 10.588C75.7613 11.6733 76.0179 12.5313 76.5313 13.162C77.0593 13.778 77.7999 14.086 78.7533 14.086C79.1786 14.086 79.6333 13.998 80.1173 13.822C80.6013 13.646 81.0339 13.382 81.4153 13.03L82.2293 14.966C81.7893 15.3473 81.2246 15.6553 80.5353 15.89C79.8606 16.11 79.1859 16.22 78.5113 16.22Z"
          fill="black"
        />
        <path d="M84.7742 16V12.942H87.8542V16H84.7742Z" fill="#4875DA" />
      </svg>
      <h1 className="w-0 h-0 opacity-0">
        Filebot : digital asset management for tech-teams
        <small>We make working with files in Slack super easy!</small>
      </h1>
    </div>
  )
}

export default function Page() {
  return (
    <div className="w-full min-h-screen h-full bg-[#fff] py-4 max-w-[1600px] mx-auto">
      <header className="w-full sm:h-[80px] xs:h-auto">
        <nav>
          <Gutter>
            <div className="flex items-center xs:flex-col sm:flex-row gap-6 xs:border-b sm:border-b-0 xs:pb-7 sm:pb-0 rounded justify-between">
              <Logo />
              <div className="flex gap-7 items-center">
                <div>
                  <a
                    href="#features"
                    className="text-sm font-body text-[#334155] font-light tracking-wide"
                  >
                    Features
                  </a>
                </div>
                <div>
                  <a
                    href="#pricing"
                    className="text-sm font-body text-[#334155] font-light tracking-wide"
                  >
                    Pricing
                  </a>
                </div>
                {/* <a href="#launching">
                  <div className="px-3 py-2 bg-[#0F172A] rounded-md text-white text-sm">
                    Get Started
                  </div>
                </a> */}
              </div>
            </div>
          </Gutter>
        </nav>
      </header>
      <div className="mt-20" />
      <main>
        <section>
          <Gutter>
            <div className="flex flex-col items-center h-[calc(100vh-180px)] realtive">
              <div className="relative">
                <div className="relative text-xs md:hidden flex justify-center mb-4">
                  <SlackPill />
                </div>
                <div className="xs:text-4xl sm:text-6xl  lg:text-7xl font-header font-bold capitalize text-center leading-[90px] relative">
                  Your design assets
                  <div className="text-[#4875DA] w-fit mx-auto relative">
                    <div className="display-block z-[2] relative">
                      Supercharged
                    </div>

                    <div aria-hidden="true">
                      <svg
                        className="w-full h-auto relative static md:-top-[20px] z-[1]"
                        viewBox="0 0 408 17"
                        fill="none"
                      >
                        <path
                          d="M3.03833 13.6115L118.915 7.26725L203.167 2.83594H267.273L355.188 7.26725L404.845 13.6115"
                          stroke="#759BF0"
                          strokeOpacity="0.6"
                          strokeWidth="5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="xs:hidden md:block">
                    <SlackPill />
                  </div>
                </div>

                <p className="xs:text-md md:text-lg font-light text-body xs:w-full sm:w-full lg:w-[600px] mx-auto text-center mt-2 xs:leading-8 md:leading-10">
                  <span className="tracking-wider font-body font-medium">
                    filebloc
                  </span>
                  <span className="text-primary-500 font-bold">.</span> makes
                  managing digital assets a breeze! <br />
                  Upload, edit, search, and share files directly from Slack.
                </p>
              </div>
              <div className="flex gap-5 mt-16 items-center flex-wrap justify-center">
                <a
                  href="#launching"
                  className="px-4 py-3 rounded-md bg-slate-900 text-white text-sm flex items-center gap-2 tracking-wide font-light"
                >
                  Launching Soon{" "}
                  <span>
                    <CaretRightIcon />
                  </span>
                </a>
                <a href="#video">
                  <div className="px-4 py-3 rounded-md text-slate-900 border-slate-200 border text-sm flex items-center gap-3 tracking-wide">
                    <span>
                      <svg
                        width="11"
                        height="10"
                        viewBox="0 0 11 10"
                        fill="none"
                      >
                        <path
                          d="M9.89983 6.29032L2.31683 9.73732C2.16453 9.80659 1.99728 9.83653 1.8304 9.82441C1.66352 9.81229 1.50235 9.7585 1.36165 9.66795C1.22096 9.5774 1.10523 9.45299 1.02507 9.30613C0.944906 9.15926 0.902878 8.99463 0.902832 8.82732V1.93332C0.902878 1.766 0.944906 1.60137 1.02507 1.4545C1.10523 1.30764 1.22096 1.18323 1.36165 1.09269C1.50235 1.00214 1.66352 0.94834 1.8304 0.936221C1.99728 0.924101 2.16453 0.954048 2.31683 1.02332L9.89983 4.47032C10.6818 4.82532 10.6818 5.93532 9.89983 6.29032Z"
                          fill="#4976DB"
                        />
                      </svg>
                    </span>
                    Watch video
                  </div>
                </a>
              </div>
            </div>
          </Gutter>
        </section>

        <section>
          <Gutter className="bg-gradient-blue py-20 min-h-[900px]">
            <div className="text-center flex flex-col w-full py-10">
              <h2
                className="text-3xl text-white font-heading tracking-wide"
                id="features"
              >
                Discover a new level of collaboration
              </h2>

              <p className="text-white text-md font-extralight tracking-wider mt-6 xs:w-full md:w-3/4 mx-auto text-center font-body leading-8">
                Filebloc enables your team to effortlessly manage Assets,
                whether it&#39;s images, graphics, icons, or files right within
                Slack!
              </p>
            </div>

            <div className="flex mt-8 flex-wrap xs:gap-5 md:gap-10 justify-center mx-auto md:max-w-[900px] w-full">
              <div className="rounded-full text-center text-white bg-trans-white xs:text-sm md:text-md font-light px-5 py-2">
                Drag and drop
              </div>
              <div className="rounded-full text-center text-white bg-trans-white xs:text-sm md:text-md font-light px-5 py-2">
                Smart search
              </div>
              <div className="rounded-full text-center text-white bg-trans-white xs:text-sm md:text-md font-light px-5 py-2">
                Link generation
              </div>
              <div className="rounded-full text-center text-white bg-trans-white xs:text-sm md:text-md font-light px-5 py-2">
                {" "}
                Version control
              </div>
              <div className="rounded-full text-center text-white bg-trans-white xs:text-sm md:text-md font-light px-5 py-2">
                Manage Permission
              </div>
            </div>
            <div
              id="video"
              className="mx-auto md:max-w-[900px] w-full bg-[#F8FAFC] rounded-lg drop-shadow-xl flex items-center justify-center mt-20"
            >
              <video
                className="w-full h-auto rounded-lg border border-neutral-300"
                src="/filebloc-promo-video.mp4"
                preload="auto"
                controls
              >
                Tag not supported
              </video>
            </div>
          </Gutter>
        </section>

        <section>
          <Gutter className="py-20 mb-20">
            <div className="flex flex-col items-center text-center mt-10">
              <p className="text-[#4875DA] text-md tracking-wide font-medium mb-5">
                Cloud integration
              </p>
              <h3 className="font-heading font-medium text-primary-900 mb-5 xs:text-2xl md:text-3xl">
                Integration with Cloud Storage
              </h3>
              <p className="text-sm leading-6 text-body xs:w-full md:w-2/3 lg:1/4">
                <Balance ratio={0.8}>
                  Seamlessly connect <b>Filebloc</b> with your cloud storage
                  solutions like Google Drive, Dropbox, Cloudflare, Jira, etc.
                  to centralize assets and ensure redundancy.
                </Balance>
              </p>
            </div>
            <div className="grid sm:grid-cols-3 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:w-full md:w-3/4  gap-10 mt-10 mx-auto justify-items-center">
              {[
                {
                  title: "Google Drive",
                  icon: <GoogleDriveIcon />
                },
                {
                  title: "Dropbox",
                  icon: <DropboxIcon />
                },
                {
                  title: "Onedrive",
                  icon: <OneDriveIcon />
                },
                {
                  title: "Linear",
                  icon: (
                    <CgLinear size="35px" className="-ml-2" color="#5e6ad2" />
                  )
                },
                {
                  title: "Cloudflare",
                  icon: <CloudFlareIcon />
                },
                {
                  title: "Jira",
                  icon: <JiraIcon />
                },
                {
                  title: "AWS",
                  icon: <AWSIcon />
                },
                {
                  title: "Box",
                  icon: <BoxIcon />
                }
              ].map(({ title, icon }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 flex-1 whitespace-nowrap md:text-sm xs:text-sm w-24"
                >
                  <span className="h-auto">{icon}</span>
                  {title}
                </div>
              ))}
            </div>
          </Gutter>
        </section>

        <section>
          <Gutter>
            <div className="flex flex-col items-center text-center mt-10">
              <p className="text-[#4875DA] text-md tracking-wide font-medium mb-5">
                Build faster
              </p>
              <h3 className="font-heading font-medium text-primary-900 mb-5 xs:text-2xl md:text-3xl">
                Maximize Productivity, Minimize Hassle: <br />
                FileBloc for Tech Teams
              </h3>
              <p className="text-sm leading-6 text-body xs:w-full md:w-2/3 lg:3/4">
                <Balance ratio={0.8}>
                  Managing design assets effectively is critical for tech teams.
                  <b> Filebloc</b> simplifies this process, enabling you to
                  perform all these tasks directly within Slack.
                </Balance>
              </p>
            </div>
            <div className="xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-10 mt-20 grid justify-items-center xs:text-center md:text-left">
              <div className="flex gap-3 flex-col ">
                <span className="w-10 h-10 rounded-md p-[10px] bg-primary-500 text-white flex md:self-start xs:self-center">
                  <LightningBoltIcon
                    width="100%"
                    height="100%"
                    className="m-auto"
                  />
                </span>
                <p className="text-heading text-md text-primary-900 tracking-wide p-0 m-0 leading-1 mt-2">
                  Streamline Actions
                </p>
                <p className="text-body leading-6 font-light text-sm">
                  Perform actions like viewing, updating, deleting, downloading,
                  and copying asset links within seconds.
                </p>
              </div>
              <div className="flex gap-3 flex-col">
                <span className="w-10 h-10 rounded-md p-[10px] bg-primary-500 text-white flex md:self-start xs:self-center">
                  <MagnifyingGlassIcon
                    width="100%"
                    height="100%"
                    className="m-auto"
                  />
                </span>
                <p className="text-heading text-md text-primary-900 tracking-wide p-0 m-0 leading-1 mt-2">
                  Smart Search
                </p>
                <p className="text-body leading-6 font-light text-sm">
                  Find exactly what you need with advanced AI search options
                  based on labels, descriptions, folders, and more.
                </p>
              </div>
              <div className="flex gap-3 flex-col">
                <span className="w-10 h-10 rounded-md p-[10px] bg-primary-500 text-white flex md:self-start xs:self-center">
                  <ClipboardCopyIcon
                    width="100%"
                    height="100%"
                    className="m-auto"
                  />
                </span>
                <p className="text-heading text-md text-primary-900 tracking-wide p-0 m-0 leading-1 mt-2">
                  Version Control and History
                </p>
                <p className="text-body leading-6 font-light text-sm">
                  Keep track of asset versions and access a full history,
                  ensuring you&#39;re always using the latest iteration.
                </p>
              </div>
              <div className="flex gap-3 flex-col">
                <span className="w-10 h-10 rounded-md p-[10px] bg-primary-500 text-white flex md:self-start xs:self-center">
                  <ArchiveIcon width="100%" height="100%" className="m-auto" />
                </span>
                <p className="text-heading text-md text-primary-900 tracking-wide p-0 m-0 leading-1 mt-2">
                  Centralized Asset Library
                </p>
                <p className="text-body leading-6 font-light text-sm">
                  Easily organize and access all your design assets from one
                  centralized location within Slack.
                </p>
              </div>
              <div className="flex gap-3 flex-col">
                <span className="w-10 h-10 rounded-md p-[10px] bg-primary-500 text-white flex md:self-start xs:self-center">
                  <LockClosedIcon
                    width="100%"
                    height="100%"
                    className="m-auto"
                  />
                </span>
                <p className="text-heading text-md text-primary-900 tracking-wide p-0 m-0 leading-1 mt-2">
                  Permission Controls and Access Levels
                </p>
                <p className="text-body leading-6 font-light text-sm">
                  Set specific permissions and access levels for different team
                  members. Control who can view, edit, or manage assets,
                  enhancing security and collaboration within the team.
                </p>
              </div>
              <div className="flex gap-3 flex-col">
                <span className="w-10 h-10 rounded-md p-[10px] bg-primary-500 text-white flex md:self-start xs:self-center">
                  <BellIcon width="100%" height="100%" className="m-auto" />
                </span>
                <p className="text-heading text-md text-primary-900 tracking-wide p-0 m-0 leading-1 mt-2">
                  Real-Time Notifications
                </p>
                <p className="text-body leading-6 font-light text-sm">
                  Receive real-time alerts and notifications within Slack when
                  new assets are uploaded, or when there are updates or comments
                  on assets.
                </p>
              </div>
            </div>
          </Gutter>
        </section>

        <section>
          <Gutter>
            <div className="flex flex-col items-center text-center mt-20 pt-20">
              <p className="text-[#4875DA] text-md tracking-wide font-medium mb-5">
                Pricing
              </p>
              <h3 className="font-heading font-medium text-primary-900 mb-5 xs:text-2xl md:text-3xl">
                Pricing plans for teams of all sizes
              </h3>
              <p className="text-sm leading-6 text-body xs:w-full md:w-2/3 lg:w-2/4">
                Choose an affordable plan that’s packed with the best features
                for engaging your audience, creating customer loyalty, and
                driving sales.
              </p>
            </div>
            <PricingSection />
          </Gutter>
        </section>
        <section>
          <Gutter className={"pt-20 px-2"}>
            <div className="flex flex-col items-center md:p-20 xs:p-10 mt-20 gap-5 text-center shadow-lg rounded-lg bg-white border border-slate-100">
              <div className="flex flex-col items-center max-w-fit">
                <p className="md:text-4xl xs:text-2xl sm:text-3xl font-heading text-primary-900 font-medium mb-2">
                  <Balance>Get notified when we launch!</Balance>
                </p>
                <p className="w-full  pb-5 leading-8">
                  <Balance
                    ratio={0.8}
                    className="md:w-3/4 xs:w-full mb-2 xs:text-[0.8rem]  md:text-[1rem] text-body font-light "
                  >
                    Sign up now to be among the first to experience Filebloc.
                    Stay informed about our launch, early access, and exclusive
                    offers.
                  </Balance>
                </p>
                <SignUpForm />
              </div>
            </div>
          </Gutter>
        </section>
      </main>
      <footer>
        <Gutter>
          <div className="border-b border-neutral-200 mt-20 mb-10" />
          <p className="text-sm text-light text-stone-400 font-light">
            © 2023 filebloc. All rights reserved.
          </p>
          <div className="mb-10" />
        </Gutter>
      </footer>
    </div>
  )
}
