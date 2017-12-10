

function setup(app, handlers) {
	// ########## Routes ##########

	// User Routers
	const userRouter = express.Router();

	userRouter.post('/', handlers.getUserData.getUserData);

	app.use('/api/user', userRouter);

	const userPoliciesRouter = express.Router();

	userPoliciesRouter.post('/', handlers.getUserPolicies.getUserPolicies)

	app.use('/api/user/policy', userPoliciesRouter);

	// Policy Routers

	const policyRouter = express.Router();

	policyRouter.post('/', handlers.getPolicyOwner);

	app.use('/api/policy/user', policyRouter);
};

exports.setup = setup;
