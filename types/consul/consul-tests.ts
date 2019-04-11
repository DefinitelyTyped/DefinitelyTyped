import Consul = require("consul");

let ConsulStatic: Consul.ConsulStatic;
let AclStatic: Consul.AclStatic = ConsulStatic.Acl;
let AgentStatic: Consul.AgentStatic = ConsulStatic.Agent;
let AgentCheckStatic: Consul.Agent.CheckStatic = ConsulStatic.Agent.Check;
let AgentServiceStatic: Consul.Agent.ServiceStatic = ConsulStatic.Agent.Service;
let CatalogStatic: Consul.CatalogStatic = ConsulStatic.Catalog;
let CatalogNodeStatic: Consul.Catalog.NodeStatic = ConsulStatic.Catalog.Node;
let CatalogServiceStatic: Consul.Catalog.ServiceStatic = ConsulStatic.Catalog.Service;
let EventStatic: Consul.EventStatic = ConsulStatic.Event;
let HealthStatic: Consul.HealthStatic = ConsulStatic.Health;
let KvStatic: Consul.KvStatic = ConsulStatic.Kv;
let LockStatic: Consul.LockStatic = ConsulStatic.Lock;
let SessionStatic: Consul.SessionStatic = ConsulStatic.Session;
let StatusStatic: Consul.StatusStatic = ConsulStatic.Status;
let WatchStatic: Consul.WatchStatic = ConsulStatic.Watch;

let consul: Consul.Consul;

consul = Consul();
consul = new Consul();


// Consul.Acl
{
	let acl: Consul.Acl = consul.acl;

	acl = new AclStatic(consul);
	consul = acl.consul;

	{
		let opts: Consul.Acl.CreateOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		acl.create<any>(opts, callback);
		acl.create<any>(callback);

		result = acl.create<any>(opts);
		result = acl.create<any>();
	}

	{
		let opts: Consul.Acl.UpdateOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		acl.update<any>(opts, callback);

		result = acl.update<any>(opts);
	}

	{
		let id: string;
		let opts: Consul.Acl.DestroyOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		acl.destroy<any>(id, callback);
		acl.destroy<any>(opts, callback);

		result = acl.destroy<any>(id);
		result = acl.destroy<any>(opts);
	}

	{
		let id: string;
		let opts: Consul.Acl.InfoOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		acl.info<any>(id, callback);
		acl.info<any>(opts, callback);

		result = acl.info<any>(id);
		result = acl.info<any>(opts);

		acl.get<any>(id, callback);
		acl.get<any>(opts, callback);

		result = acl.get<any>(id);
		result = acl.get<any>(opts);
	}

	{
		let id: string;
		let opts: Consul.Acl.CloneOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		acl.clone<any>(id, callback);
		acl.clone<any>(opts, callback);

		result = acl.clone<any>(id);
		result = acl.clone<any>(opts);
	}

	{
		let opts: Consul.Acl.ListOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		acl.list<any>(opts, callback);
		acl.list<any>(callback);

		result = acl.list<any>(opts);
		result = acl.list<any>();
	}
}


// Consul.Agent
{
	let agent: Consul.Agent = consul.agent;

	agent = new AgentStatic(consul);
	consul = agent.consul;

	{
		let opts: Consul.Agent.ChecksOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		agent.checks<any>(opts, callback);
		agent.checks<any>(callback);

		result = agent.checks<any>(opts);
		result = agent.checks<any>();
	}

	{
		let opts: Consul.Agent.ServicesOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		agent.services<any>(opts, callback);
		agent.services<any>(callback);

		result = agent.services<any>(opts);
		result = agent.services<any>();
	}

	{
		let opts: Consul.Agent.MembersOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		agent.members<any>(opts, callback);
		agent.members<any>(callback);

		result = agent.members<any>(opts);
		result = agent.members<any>();
	}

	{
		let opts: Consul.Agent.SelfOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		agent.self<any>(opts, callback);
		agent.self<any>(callback);

		result = agent.self<any>(opts);
		result = agent.self<any>();
	}

	{
		let enable: boolean;
		let opts: Consul.Agent.MaintenanceOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		agent.maintenance<any>(enable, callback);
		agent.maintenance<any>(opts, callback);

		result = agent.maintenance<any>(enable);
		result = agent.maintenance<any>(opts);
	}

	{
		let address: string;
		let opts: Consul.Agent.JoinOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		agent.join<any>(address, callback);
		agent.join<any>(opts, callback);

		result = agent.join<any>(address);
		result = agent.join<any>(opts);
	}

	{
		let node: string;
		let opts: Consul.Agent.ForceLeaveOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		agent.forceLeave<any>(node, callback);
		agent.forceLeave<any>(opts, callback);

		result = agent.forceLeave<any>(node);
		result = agent.forceLeave<any>(opts);
	}


	// Consul.Agent.Check
	{
		let check: Consul.Agent.Check = consul.agent.check;

		check = new AgentCheckStatic(consul);
		consul = check.consul;

		{
			let id: string;
			let opts: Consul.Agent.Check.ListOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			check.list<any>(opts, callback);
			check.list<any>(callback);

			result = check.list<any>(opts);
			result = check.list<any>();
		}

		{
			let opts: Consul.Agent.Check.RegisterOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			check.register<any>(opts, callback);

			result = check.register<any>(opts);
		}

		{
			let id: string;
			let opts: Consul.Agent.Check.DeregisterOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			check.deregister<any>(id, callback);
			check.deregister<any>(opts, callback);

			result = check.deregister<any>(id);
			result = check.deregister<any>(opts);
		}

		{
			let id: string;
			let opts: Consul.Agent.Check.PassOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			check.pass<any>(id, callback);
			check.pass<any>(opts, callback);

			result = check.pass<any>(id);
			result = check.pass<any>(opts);
		}

		{
			let id: string;
			let opts: Consul.Agent.Check.WarnOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			check.warn<any>(id, callback);
			check.warn<any>(opts, callback);

			result = check.warn<any>(id);
			result = check.warn<any>(opts);
		}

		{
			let id: string;
			let opts: Consul.Agent.Check.WarnOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			check.fail<any>(id, callback);
			check.fail<any>(opts, callback);

			result = check.fail<any>(id);
			result = check.fail<any>(opts);
		}
	}


	// Consul.Agent.Service
	{
		let service: Consul.Agent.Service = consul.agent.service;

		service = new AgentServiceStatic(consul);
		consul = service.consul;

		{
			let opts: Consul.Agent.Service.ListOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			service.list<any>(opts, callback);
			service.list<any>(callback);

			result = service.list<any>(opts);
			result = service.list<any>();
		}

		{
			let id: string;
			let opts: Consul.Agent.Service.RegisterOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			service.register<any>(id, callback);
			service.register<any>(opts, callback);

			result = service.register<any>(id);
			result = service.register<any>(opts);
		}

		{
			let id: string;
			let opts: Consul.Agent.Service.DeregisterOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			service.deregister<any>(id, callback);
			service.deregister<any>(opts, callback);

			result = service.deregister<any>(id);
			result = service.deregister<any>(opts);
		}

		{
			let opts: Consul.Agent.Service.MaintenanceOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			service.maintenance<any>(opts, callback);

			result = service.maintenance<any>(opts);
		}
	}
}

// Consul.Catalog
{
	let catalog: Consul.Catalog = consul.catalog;

	catalog = new CatalogStatic(consul);
	consul = catalog.consul;

	{
		let opts: Consul.Catalog.DatacentersOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		catalog.datacenters<any>(opts, callback);
		catalog.datacenters<any>(callback);

		result = catalog.datacenters<any>(opts);
		result = catalog.datacenters<any>();
	}

	{
		let dc: string;
		let opts: Consul.Catalog.NodesOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		catalog.nodes<any>(dc, callback);
		catalog.nodes<any>(opts, callback);
		catalog.nodes<any>(callback);

		result = catalog.nodes<any>(dc);
		result = catalog.nodes<any>(opts);
		result = catalog.nodes<any>();
	}

	{
		let dc: string;
		let opts: Consul.Catalog.ServicesOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		catalog.services<any>(dc, callback);
		catalog.services<any>(opts, callback);
		catalog.services<any>(callback);

		result = catalog.services<any>(dc);
		result = catalog.services<any>(opts);
		result = catalog.services<any>();
	}


	// Consul.Catalog.Node
	{
		let node: Consul.Catalog.Node = consul.catalog.node;

		node = new CatalogNodeStatic(consul);
		consul = node.consul;

		{
			let dc: string;
			let opts: Consul.Catalog.Node.ListOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			node.list<any>(dc, callback);
			node.list<any>(opts, callback);
			node.list<any>(callback);

			result = node.list<any>(dc);
			result = node.list<any>(opts);
			result = node.list<any>();
		}

		{
			let nodeOption: string;
			let opts: Consul.Catalog.Node.ServicesOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			node.services<any>(nodeOption, callback);
			node.services<any>(opts, callback);

			result = node.services<any>(nodeOption);
			result = node.services<any>(opts);
		}
	}

	// Consul.Catalog.Service
	{
		let service: Consul.Catalog.Service = consul.catalog.service;

		service = new CatalogServiceStatic(consul);
		consul = service.consul;

		{
			let dc: string;
			let opts: Consul.Catalog.Service.ListOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			service.list<any>(dc, callback);
			service.list<any>(opts, callback);
			service.list<any>(callback);

			result = service.list<any>(dc);
			result = service.list<any>(opts);
			result = service.list<any>();
		}

		{
			let serviceOption: string;
			let opts: Consul.Catalog.Service.NodesOptions;
			let callback: Consul.Callback<any>;
			let result: Consul.Thenable<any>;

			service.nodes<any>(serviceOption, callback);
			service.nodes<any>(opts, callback);

			result = service.nodes<any>(serviceOption);
			result = service.nodes<any>(opts);
		}
	}
}

// Consul.Event
{
	let event: Consul.Event = consul.event;

	event = new EventStatic(consul);
	consul = event.consul;

	{
		let name: string;
		let payload: string|Buffer;
		let opts: Consul.Event.FireOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		event.fire<any>(name, payload, callback);
		event.fire<any>(name, callback);
		event.fire<any>(opts, callback);

		result = event.fire<any>(name, payload);
		result = event.fire<any>(name);
		result = event.fire<any>(opts);
	}

	{
		let name: string;
		let opts: Consul.Event.ListOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		event.list<any>(name, callback);
		event.list<any>(opts, callback);
		event.list<any>(callback);

		result = event.list<any>(name);
		result = event.list<any>(opts);
		result = event.list<any>();
	}
}

// Consul.Health
{
	let health: Consul.Health = consul.health;
	let name: string;

	health = new HealthStatic(consul);
	consul = health.consul;

	{
		let node: string;
		let opts: Consul.Health.NodeOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		health.node<any>(name, callback);
		health.node<any>(opts, callback);

		result = health.node<any>(name);
		result = health.node<any>(opts);
	}

	{
		let service: string;
		let opts: Consul.Health.ChecksOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		health.checks<any>(service, callback);
		health.checks<any>(opts, callback);

		result = health.checks<any>(service);
		result = health.checks<any>(opts);
	}

	{
		let service: string;
		let opts: Consul.Health.ServiceOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		health.service<any>(service, callback);
		health.service<any>(opts, callback);

		result = health.service<any>(service);
		result = health.service<any>(opts);
	}

	{
		let state: string;
		let opts: Consul.Health.StateOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		health.state<any>(state, callback);
		health.state<any>(opts, callback);

		result = health.state<any>(state);
		result = health.state<any>(opts);
	}
}


// Consul.Kv
{
	let kv: Consul.Kv = consul.kv;

	kv = new KvStatic(consul);
	consul = kv.consul;

	{
		let key: string;
		let opts: Consul.Kv.GetOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		kv.get<any>(key, callback);
		kv.get<any>(opts, callback);

		result = kv.get<any>(key);
		result = kv.get<any>(opts);
	}

	{
		let key: string;
		let opts: Consul.Kv.KeysOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		kv.keys<any>(key, callback);
		kv.keys<any>(opts, callback);
		kv.keys<any>(callback);

		result = kv.keys<any>(key);
		result = kv.keys<any>(opts);
		result = kv.keys<any>();
	}

	{
		let key: string;
		let value: string|Buffer;
		let opts: Consul.Kv.SetOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		kv.set<any>(key, value, opts, callback);
		kv.set<any>(key, value, callback);
		kv.set<any>(opts, callback);

		result = kv.set<any>(key, value, opts);
		result = kv.set<any>(key, value);
		result = kv.set<any>(opts);
	}

	{
		let key: string;
		let opts: Consul.Kv.DelOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		kv.del<any>(key, callback);
		kv.del<any>(opts, callback);

		result = kv.del<any>(key);
		result = kv.del<any>(opts);

		kv.delete<any>(key, callback);
		kv.delete<any>(opts, callback);

		result = kv.delete<any>(key);
		result = kv.delete<any>(opts);
	}
}


// Consul.Lock
{
	let lock: Consul.Lock;
	let opts: Consul.Lock.Options;

	lock = new LockStatic(consul, opts);
	lock = consul.lock(opts);
	consul = lock.consul;

	lock.acquire();

	lock.release();
}


// Consul.Session
{
	let session: Consul.Session = consul.session;

	session = new SessionStatic(consul);
	consul = session.consul;

	{
		let opts: Consul.Session.CreateOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		session.create<any>(opts, callback);
		session.create<any>(callback);

		result = session.create<any>(opts);
		result = session.create<any>();
	}

	{
		let id: string;
		let opts: Consul.Session.DestroyOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		session.destroy<any>(id, callback);
		session.destroy<any>(opts, callback);

		result = session.destroy<any>(id);
		result = session.destroy<any>(opts);
	}

	{
		let id: string;
		let opts: Consul.Session.InfoOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		session.info<any>(id, callback);
		session.info<any>(opts, callback);

		result = session.info<any>(id);
		result = session.info<any>(opts);

		session.get<any>(id, callback);
		session.get<any>(opts, callback);

		result = session.get<any>(id);
		result = session.get<any>(opts);
	}

	{
		let node: string;
		let opts: Consul.Session.NodeOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		session.node<any>(node, callback);
		session.node<any>(opts, callback);

		result = session.node<any>(node);
		result = session.node<any>(opts);
	}

	{
		let opts: Consul.Session.ListOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		session.list<any>(opts, callback);
		session.list<any>(callback);

		result = session.list<any>(opts);
		result = session.list<any>();
	}

	{
		let id: string;
		let opts: Consul.Session.RenewOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		session.renew<any>(id, callback);
		session.renew<any>(opts, callback);

		result = session.renew<any>(id);
		result = session.renew<any>(opts);
	}
}


// Consul.Status
{
	let status: Consul.Status = consul.status;

	status = new StatusStatic(consul);
	consul = status.consul;

	{
		let opts: Consul.Status.LeaderOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		status.leader<any>(opts, callback);
		status.leader<any>(callback);

		result = status.leader<any>(opts);
		result = status.leader<any>();
	}

	{
		let opts: Consul.Status.LeaderOptions;
		let callback: Consul.Callback<any>;
		let result: Consul.Thenable<any>;

		status.peers<any>(opts, callback);
		status.peers<any>(callback);

		result = status.peers<any>(opts);
		result = status.peers<any>();
	}
}


// Consul.Watch
{
	let watch: Consul.Watch;
	let opts: Consul.Watch.Options;

	watch = new WatchStatic(consul, opts);
	watch = consul.watch(opts);
	consul = watch.consul;

	watch.isRunning();

	watch.updateTime();

	watch.end();
}
