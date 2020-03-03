import React,{Fragment} from 'react';

const Card = ({name, email}) =>{
	return(
		<Fragment >
			<div className = 'tc bg-light-green dib br2 pa2 ma2 grow bw2 shadow-5'>
				<img src={`https://robohash.org/${name}?100x100`} alt='Kororo'/>
				<div>
					<p>{name}</p>
					<p>{email}</p>
				</div>
			</div>
		</Fragment>
		);
}
export default Card;