module.exports = function(app){
	//GET
	app
	.get('/',function(req,res){
		res.sendFile('index.html',{root:'/public/'});
	})
	
	.get('/data',function(req,res){
		res.status(200).json({"names":[{
                           "first-name": "Laurl",
						   "last-name":"Jr."
                       },
					   {
                           "first-name": "Rev",
						   "last-name":"Wills"
		}]});
	});
}
