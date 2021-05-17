

module.exports = {
	index:(request,response)=>{
		response.render('mail');
	},

	send:(request,response)=>{
		const mailer = require('nodemailer');
		const transport = mailer.createTransport({
  				 	service: 'gmail',
    				auth: {
        			user: request.body.from_email,
        			pass: request.body.password
  				  		}
					});

		var mailOptions = {
					    from: request.body.from_email,
					    to: request.body.to_email,	

					    subject: 'New Ticket : resting ticket ',
					    html: '<hr>'+
					    	  '<h3>'+ request.body.messege + '</h3>' + 
					    	  +'<hr>'
						};
					

				transport.sendMail(mailOptions, (err, info) => {
    			if (err) throw err;
    			console.log('Email sent: ' + info.response);
				});	
				response.render('mail');
		// response.send('testing '+request.body.to_email)
	}
}