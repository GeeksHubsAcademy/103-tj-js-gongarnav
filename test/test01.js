function tiers(index) {
	
	let result ='';
	for(i=1; i<=index; i++){

		const spaces = ' '.repeat(index-i); 
		const asterisks = '*'.repeat(i);
		const lineBreak  = '\n';

		result+=spaces.concat(asterisks).concat(lineBreak);
		
	}
	return result;
}

module.exports = tiers;
