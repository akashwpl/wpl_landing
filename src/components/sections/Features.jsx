import wpl_earn_btn from '../../assets/subtract_png/wpl_earn.png'
import wpl_earn_btn_hover from '../../assets/subtract_png/wpl_earn_hover.png'
import Card from '../Card'

import FancyButton from '../FancyButton'

const cardData = [
	{
		icon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M11.3493 10.583V5.84662V1.11025C11.3493 0.497077 11.8464 0 12.4596 0H14.7885H17.1174C17.7306 0 18.2277 0.497077 18.2277 1.11025V5.84662V10.583C18.2277 11.1962 18.7248 11.6932 19.3379 11.6932H24.1135H28.8064C29.4512 11.6932 29.9603 12.2406 29.9137 12.8837L29.7882 14.6165L29.6426 16.6312C29.6045 17.1594 29.1985 17.5872 28.673 17.6528L26.8256 17.8838L25.0129 18.1104C24.472 18.178 24.0602 18.6283 24.0411 19.173L23.8748 23.9024L23.7125 28.5059C23.6914 29.1034 23.2008 29.577 22.6029 29.577H20.6076H18.6501C18.0369 29.577 17.5398 29.0799 17.5398 28.4667V23.7304V18.994C17.5398 18.3808 17.0428 17.8838 16.4296 17.8838H14.7885H13.1474C12.5342 17.8838 12.0371 18.3808 12.0371 18.994V23.7304V28.4667C12.0371 29.0799 11.5401 29.577 10.9269 29.577H8.9419H6.95687C6.34369 29.577 5.84662 29.0799 5.84662 28.4667V21.0182V13.4929C5.84662 12.9108 5.39712 12.4276 4.8166 12.3855L2.92331 12.2483L1.03027 12.1116C0.449638 12.0696 0 11.5864 0 11.0042V8.94188V6.95687C0 6.34369 0.497078 5.84662 1.11025 5.84662H3.09529H5.15759C5.73972 5.84662 6.22301 6.29625 6.26495 6.87687L6.40171 8.76992L6.53891 10.6632C6.58099 11.2437 7.06423 11.6932 7.64626 11.6932H8.9811H10.2391C10.8522 11.6932 11.3493 11.1962 11.3493 10.583Z" fill="currentColor"/>
			</svg>, 
		title: 'Earn Onchain', 
		description: 'Complete projects, contribute and unlock earning opportunities'
	},
	{
		icon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 11.1436V6.12065V1.09772C0 0.491465 0.491466 0 1.09772 0H5.75342H10.4465C11.0377 0 11.5227 0.468196 11.5435 1.05902L11.704 5.61059L11.8666 10.2359C11.8863 10.7963 12.3253 11.2518 12.8846 11.2922L14.7915 11.43L16.5048 11.5541C17.1406 11.6002 17.6819 11.0968 17.6819 10.4593V5.81939V1.09772C17.6819 0.491465 18.1733 0 18.7796 0H20.7422H22.7048C23.311 0 23.8025 0.491464 23.8025 1.09772V6.08189V11.142C23.8025 11.7175 23.3581 12.1953 22.7841 12.2369L20.9122 12.3725L18.9301 12.5157C18.4034 12.5538 17.9785 12.9614 17.9186 13.486L17.7988 14.5345L17.6359 15.9614C17.5979 16.2939 17.7136 16.6255 17.9503 16.8622L18.33 17.2419L18.7658 17.6777C18.9698 17.8817 19.2459 17.9972 19.5344 17.9992L24.3336 18.0328L28.5698 18.0624C29.142 18.0664 29.6152 18.5094 29.6569 19.0802L29.7912 20.9204L29.915 22.6106C29.9611 23.2401 29.4682 23.7787 28.8371 23.7884L17.89 23.9569L6.78619 24.1271C6.21715 24.1359 5.74915 24.578 5.70815 25.1456L5.57182 27.0329L5.43616 28.9048C5.39457 29.4787 4.91678 29.9232 4.34132 29.9232H2.68152H1.09772C0.491465 29.9232 0 29.4317 0 28.8254V26.9036V24.8952C0 24.3242 0.437869 23.8485 1.00699 23.8013L2.55028 23.6733L4.12821 23.5428C4.68274 23.497 5.11527 23.0435 5.13481 22.4874L5.29776 17.8519L5.45557 13.3777C5.47748 12.7567 4.97996 12.2413 4.35854 12.2413H2.74749H1.09772C0.491466 12.2413 0 11.7498 0 11.1436Z" fill="currentColor"/>
			</svg>, 
		title: 'Share Proof of Work', 
		description: 'Build a verifiable body of work'
	},
	{
		icon: <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 4.92161V2.99862V1.07558C0 0.481553 0.481553 0 1.07558 0H3.33179H5.58797C6.182 0 6.66355 0.481553 6.66355 1.07558V2.62545V4.26015C6.66355 4.81971 7.09259 5.2858 7.65024 5.33205L9.16239 5.45746L10.7434 5.58815C11.2717 5.63182 11.6894 6.05388 11.7276 6.58258L11.8658 8.49603L11.9987 10.3302C12.0395 10.8926 12.5076 11.328 13.0715 11.328H14.6598H16.2482C16.812 11.328 17.2802 10.8926 17.3209 10.3302L17.4539 8.49603L17.5914 6.59226C17.6299 6.05933 18.0537 5.63546 18.5867 5.59697L20.4904 5.45944L22.3246 5.32653C22.887 5.28578 23.3224 4.81763 23.3224 4.25376V2.62745V1.07558C23.3224 0.481553 23.804 0 24.398 0H26.6609H28.836C29.4635 0 29.9577 0.534861 29.9083 1.16035L29.7761 2.83201L29.6226 4.77939C29.5821 5.29302 29.1831 5.70581 28.6711 5.76365L26.6042 5.99719L24.5772 6.22623C24.0476 6.28607 23.6418 6.72464 23.623 7.25722L23.4624 11.8278L23.3051 16.2876C23.2846 16.8665 22.8094 17.3252 22.2302 17.3252H20.6304H19.0672C18.4732 17.3252 17.9916 17.8068 17.9916 18.4008V19.9907V21.5805C17.9916 22.1745 18.4731 22.6561 19.0672 22.6561H20.657H22.2469C22.8409 22.6561 23.3224 23.1376 23.3224 23.7316V25.6547V27.5777C23.3224 28.1717 22.8409 28.6533 22.2469 28.6533H20.3239H18.4008C17.8068 28.6533 17.3253 28.1717 17.3253 27.5777V25.9879V24.398C17.3253 23.804 16.8437 23.3224 16.2497 23.3224H14.6598H13.07C12.476 23.3224 11.9944 23.804 11.9944 24.398V25.9879V27.5777C11.9944 28.1717 11.5129 28.6533 10.9188 28.6533H8.99581H7.07277C6.47874 28.6533 5.99719 28.1717 5.99719 27.5777V25.9879V24.398C5.99719 23.804 5.51564 23.3224 4.92161 23.3224H2.99862H1.07558C0.481553 23.3224 0 22.8409 0 22.2468V20.3618V18.4023C0 17.8385 0.435448 17.3703 0.997835 17.3295L2.83201 17.1966L4.70053 17.0617C5.24857 17.0221 5.67866 16.5758 5.69796 16.0267L5.85728 11.4946L6.0119 7.11068C6.03336 6.50217 5.54588 5.99719 4.93699 5.99719H3.02527H1.07558C0.481553 5.99719 0 5.51564 0 4.92161Z" fill="currentColor"/>
			</svg>,
		title: 'Access to an exclusive community',
		description: 'Be a part of the pack.'
	},
	{
		icon: <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.8271 4.29592V2.69089V1.08585C17.8271 0.486153 18.3133 0 18.913 0H20.814H22.8007C23.3656 0 23.8361 0.433136 23.8828 0.996109L24.0094 2.52269L24.1453 4.16711C24.1876 4.67896 24.5828 5.09116 25.0924 5.15507L26.9001 5.38178L28.6343 5.59925C29.1763 5.66722 29.5834 6.12727 29.585 6.67353L29.591 8.74537L29.5966 10.6842C29.5983 11.2849 29.112 11.7729 28.5113 11.7732L24.5543 11.7753L19.8297 11.7778C19.6203 11.7779 19.4154 11.8386 19.2397 11.9525L18.7689 12.2577L18.5429 12.404C18.2239 12.6105 18.036 12.9687 18.0476 13.3486L18.0962 14.9452L18.1325 16.1364C18.1499 16.7089 18.6089 17.1694 19.1813 17.1886L23.8816 17.3468L28.5867 17.5057C29.1571 17.5249 29.6153 17.9824 29.6353 18.5528L29.7995 23.2331L29.9604 27.8029C29.9821 28.4172 29.4899 28.927 28.8752 28.927H26.9405H24.9674C24.3677 28.927 23.8816 28.4408 23.8816 27.8411V26.1978V24.6353C23.8816 24.0047 23.3462 23.5067 22.7173 23.5523L21.0225 23.6751L19.2627 23.8022C18.6583 23.8459 18.2066 24.3758 18.2592 24.9796L18.3834 26.4043L18.5002 27.7471C18.5553 28.3815 18.0552 28.927 17.4184 28.927H15.188H12.8585C12.2588 28.927 11.7726 28.4408 11.7726 27.8411V26.2745V24.6326C11.7726 24.0634 11.333 23.5907 10.7652 23.5496L8.91356 23.4154L7.02694 23.2791C6.47377 23.2392 6.03961 22.7888 6.02 22.2345L5.8594 17.6966L5.69935 13.158C5.6798 12.6037 5.24574 12.1533 4.69261 12.1132L2.83215 11.9785L1.00714 11.8458C0.439479 11.8046 0 11.332 0 10.7628V8.74537V6.7365C0 6.16381 0.444766 5.68957 1.01628 5.65287L3.19542 5.51295L5.23542 5.38196C5.86121 5.34178 6.39086 5.83851 6.39086 6.46559V8.37202V10.3504C6.39086 10.9501 6.87701 11.4363 7.47671 11.4363H9.08173H10.6868C11.2865 11.4363 11.7726 10.9501 11.7726 10.3504V8.40902V6.46763C11.7726 5.86793 12.2588 5.38178 12.8585 5.38178H14.7999H16.7413C17.341 5.38178 17.8271 4.89562 17.8271 4.29592Z" fill="currentColor"/>
			</svg>, 
		title: 'High Quality Resources', 
		description: 'Access to resources, information & support to help you grow and succeed'
	}
]

const Features = () => {
  return (
    <div className='my-32 lg:mx-[130px] flex flex-col justify-center items-center xl:items-start xl:justify-between text-center xl:flex-row xl:text-start'>
		{/* Group 1 */}
        <div className='text-white max-w-[300px] md:max-w-[420px]'>
			{/* Title */}
			<p data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className='font-gridular text-[28px] md:text-[48px] leading-[26px] md:leading-[45px] text-[#FAF1B1] uppercase'>Wpl Earn</p>

			{/* Description */}
			<p data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className='text-[16px] text-white/80 font-inter font-light leading-[20px] mt-2'>Join, Participate, Contribute and Earn!</p>

			{/* Earning button */}

			<div data-aos="fade-up" data-aos-delay="500" data-aos-duration="700" className='mt-5'>
				<FancyButton 
					src_img={wpl_earn_btn}
					hover_src_img={wpl_earn_btn_hover}
					img_size_classes='w-[146px] md:w-[269px] h-[35.2px] md:h-[55px]'
					className='font-gridular text-white text-[14px] md:text-[20.3px]'
					btn_txt='Coming soon'
					alt_txt='wpl_earn_btn'
				/>
			</div>
		</div>

		{/* Group 2 */}
		<div data-aos="fade-up" data-aos-delay="700" data-aos-duration="700" className="grid grid-cols-12 gap-6 mt-16 xl:mt-0">
			{cardData.map(({icon, title, description}, index) => (
				<Card key={index} icon={icon} title={title} description={description}/>
			))}
		</div>
    </div>
  )
}

export default Features;