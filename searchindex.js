Search.setIndex({"docnames": ["apidocs/core", "apidocs/index", "apidocs/library", "apidocs/serializers", "guides/01_run_anything_in_distributed_fashion", "guides/02_specific_resource_allocation", "guides/03_runtime_primitives_with_quantum_serverless", "guides/03_specific_package_installation", "guides/index", "index", "stubs/quantum_serverless.core.ComputeResource", "stubs/quantum_serverless.core.Provider", "stubs/quantum_serverless.core.get", "stubs/quantum_serverless.core.put", "stubs/quantum_serverless.core.run_qiskit_remote", "stubs/quantum_serverless.library.parallel_transpile", "stubs/quantum_serverless.serializers.serializers.circuit_deserializer", "stubs/quantum_serverless.serializers.serializers.circuit_serializer", "stubs/quantum_serverless.serializers.serializers.register_all_serializers", "stubs/quantum_serverless.serializers.serializers.service_deserializer", "stubs/quantum_serverless.serializers.serializers.service_serializer", "tutorials/01_quantum_serverless", "tutorials/02_tutorial_-_approaches_to_serverless_code_writing", "tutorials/03_tutorial_writing_serverless_pacakge_from_scratch", "tutorials/04_tutorial_-_converting_existing_code_to_serverless", "tutorials/06_electronic_structure_problem", "tutorials/index"], "filenames": ["apidocs/core.rst", "apidocs/index.rst", "apidocs/library.rst", "apidocs/serializers.rst", "guides/01_run_anything_in_distributed_fashion.ipynb", "guides/02_specific_resource_allocation.ipynb", "guides/03_runtime_primitives_with_quantum_serverless.ipynb", "guides/03_specific_package_installation.ipynb", "guides/index.rst", "index.rst", "stubs/quantum_serverless.core.ComputeResource.rst", "stubs/quantum_serverless.core.Provider.rst", "stubs/quantum_serverless.core.get.rst", "stubs/quantum_serverless.core.put.rst", "stubs/quantum_serverless.core.run_qiskit_remote.rst", "stubs/quantum_serverless.library.parallel_transpile.rst", "stubs/quantum_serverless.serializers.serializers.circuit_deserializer.rst", "stubs/quantum_serverless.serializers.serializers.circuit_serializer.rst", "stubs/quantum_serverless.serializers.serializers.register_all_serializers.rst", "stubs/quantum_serverless.serializers.serializers.service_deserializer.rst", "stubs/quantum_serverless.serializers.serializers.service_serializer.rst", "tutorials/01_quantum_serverless.ipynb", "tutorials/02_tutorial_-_approaches_to_serverless_code_writing.ipynb", "tutorials/03_tutorial_writing_serverless_pacakge_from_scratch.ipynb", "tutorials/04_tutorial_-_converting_existing_code_to_serverless.ipynb", "tutorials/06_electronic_structure_problem.ipynb", "tutorials/index.rst"], "titles": ["Core module (<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">quantum_serverless.core</span></code>)", "Quantum serverless API References", "Library (<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">quantum_serverless.library</span></code>)", "Serializers (<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">quantum_serverless.serializers.serializers</span></code>)", "Guide: run anything in distributed fashion", "Guide: specific resource requirements", "Guide: Qiskit Runtime Primitives with QuantumServerless", "Guide: specific package requirements", "&lt;no title&gt;", "Quantum serverless", "quantum_serverless.core.ComputeResource", "quantum_serverless.core.Provider", "quantum_serverless.core.get", "quantum_serverless.core.put", "quantum_serverless.core.run_qiskit_remote", "quantum_serverless.library.parallel_transpile", "quantum_serverless.serializers.serializers.circuit_deserializer", "quantum_serverless.serializers.serializers.circuit_serializer", "quantum_serverless.serializers.serializers.register_all_serializers", "quantum_serverless.serializers.serializers.service_deserializer", "quantum_serverless.serializers.serializers.service_serializer", "Quantum serverless", "Tutorial: approaches to serverless code writing", "Tutorial: writing serverless package from scratch", "Tutorial: converting existing code to serverless without internal code modifications", "Tutorial: solving electronic structure problem", "&lt;no title&gt;"], "terms": {"core": [1, 15, 21], "modul": [1, 22], "quantum_serverless": [1, 4, 5, 6, 7, 21, 22, 23, 24, 25], "librari": [1, 22, 23], "serial": [1, 21], "1": [4, 5, 6, 7, 9, 21, 23, 25], "from": [4, 5, 6, 7, 9, 11, 12, 13, 19, 21, 24, 25], "type": [4, 5, 12, 13, 16, 17, 22, 23], "import": [4, 5, 6, 7, 14, 21, 22, 23, 24, 25], "list": [4, 5, 7, 10, 11, 12, 15, 21, 22, 23, 25], "qiskit": [4, 5, 9, 17, 21, 22, 23, 24, 25], "quantumcircuit": [4, 5, 6, 15, 16, 17, 21, 22, 23, 24], "transpil": [4, 5, 15, 22, 24], "circuit": [4, 5, 6, 15, 16, 17, 21, 22, 23, 24, 25], "random": [4, 5, 6, 21, 22, 23, 24], "random_circuit": [4, 5, 6, 21, 22, 23, 24], "quantumserverless": [4, 5, 7, 9, 21, 22, 23, 24, 25], "run_qiskit_remot": [4, 5, 6, 7, 21, 22, 23, 24, 25], "get": [4, 5, 6, 7, 14, 21, 22, 23, 24, 25], "put": [4, 6, 21, 22, 23, 24], "2": [4, 5, 6, 7, 9, 21, 23, 25], "serverless": [4, 5, 6, 7, 11, 25], "lt": [4, 5, 7, 21, 22, 24, 25], "provid": [4, 5, 7, 21, 22, 24, 25], "local": [4, 5, 7, 12, 14, 15, 21, 24, 25], "gt": [4, 5, 7, 21, 22, 24, 25], "4": [4, 6, 21, 22, 24, 25], "5": [4, 5, 6, 7, 21, 22, 24, 25], "3": [4, 5, 6, 7, 21, 22, 23, 24, 25], "draw": [4, 24], "q_0": [4, 24], "": [4, 6, 12, 21, 22, 24, 25], "x": [4, 23, 24], "q_1": [4, 24], "u2": [4, 24], "0568": 4, "0": [4, 6, 21, 23, 24, 25], "20671": 4, "q_2": [4, 24], "q_3": [4, 24], "sdg": [4, 24], "t": [4, 24], "q_4": [4, 24], "37458": 4, "2557": 4, "rz": 4, "7343": 4, "7": [4, 21, 24, 25], "object": [4, 6, 12, 13, 14, 16, 17, 21, 22, 25], "make": [4, 5, 24], "ani": [4, 12, 13, 14, 21, 23, 25], "remot": [4, 6, 12, 14, 15, 21, 22, 23, 24], "circuit_refer": [4, 21], "print": [4, 6, 21, 22, 23, 24, 25], "refer": [4, 6, 9, 13, 14], "call": [4, 6, 14, 19, 21, 22, 23, 24], "function": [4, 5, 6, 9, 14, 21, 22, 23], "retrieved_object": 4, "retriev": 4, "n": [4, 6, 21, 24], "objectref": [4, 12, 13, 24], "00ffffffffffffffffffffffffffffffffffffff0100000002000000": 4, "8": [4, 21, 24, 25], "circuit_batch": 4, "_": [4, 5, 6, 7, 21, 22, 23, 24], "rang": [4, 5, 6, 7, 21, 22, 23, 24], "n_batch": 4, "0x7fdd70e60790": 4, "0x7fdd70e60e10": 4, "0x7fdd70e602d0": 4, "0x7fdd70e60d90": 4, "0x7fdd70e60b90": 4, "0x7fdd70e60ed0": 4, "10": [4, 22, 23, 24], "task": [4, 9, 12, 22, 23], "order": [4, 7, 12, 21, 23], "parallel": [4, 6, 15, 21, 22, 24], "annot": [4, 6, 21, 23], "decor": [4, 5, 6, 7, 21], "def": [4, 5, 6, 7, 14, 21, 22, 23, 24, 25], "remote_transpil": [4, 5, 22, 24], "return": [4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 19, 21, 22, 23, 24, 25], "thi": [4, 5, 12, 13, 21, 22, 23, 24, 25], "ar": [4, 7, 21, 22, 23, 24], "function_nam": 4, "remote_function_refer": 4, "result": [4, 5, 6, 7, 21, 22, 23, 24], "we": [4, 5, 6, 7, 21, 22, 24, 25], "again": 4, "us": [4, 6, 12, 15, 21, 22, 23, 24], "c8ef45ccd0112571ffffffffffffffffffffffff0100000001000000": [4, 24], "0x7fdd70e6db90": 4, "0x7fdd70e60750": 4, "11": [4, 24], "can": [4, 5, 6, 12, 21, 22, 24, 25], "multipl": [4, 21, 22, 24, 25], "resulst": 4, "16310a0f0a45af5cffffffffffffffffffffffff0100000001000000": 4, "c2668a65bda616c1ffffffffffffffffffffffff0100000001000000": 4, "32d950ec0ccf9d2affffffffffffffffffffffff0100000001000000": 4, "0x7fdd70e61b50": 4, "0x7fdd70e77a10": 4, "0x7fdd70e615d0": 4, "0x7fdd70dec5d0": 4, "0x7fdd70e761d0": 4, "0x7fdd70e61950": 4, "sometim": 5, "your": [5, 21, 22, 24], "ha": [5, 12, 21, 22, 25], "For": [5, 12, 21, 25], "exampl": [5, 11, 14, 15, 21, 22], "i": [5, 9, 12, 13, 21, 23, 24, 25], "heavi": 5, "procedur": [5, 21], "want": [5, 21, 24], "sure": 5, "fail": 5, "so": [5, 21, 24], "alloc": [5, 9], "more": [5, 21], "cpu": [5, 21, 23], "calcul": 5, "To": [5, 21], "add": 5, "target": [5, 7, 14, 21], "paramet": [5, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21], "tell": 5, "schedul": 5, "run": [5, 6, 9, 12, 21, 24], "6": [5, 21, 22, 24, 25], "0x7fc27945cfd0": 5, "0x7fc208191910": 5, "0x7fc2793e9450": 5, "quantum_info": [6, 21, 23], "sparsepauliop": [6, 21, 23], "qiskit_ibm_runtim": [6, 21, 25], "estim": [6, 21, 23, 25], "let": [6, 21, 22, 24, 25], "out": [6, 21, 24], "convert": [6, 9, 21, 25], "execut": [6, 9, 14, 23, 24], "my_funct": 6, "ob": [6, 21], "valu": [6, 13, 21, 23], "next": [6, 21], "creat": [6, 12, 13, 21, 22, 24], "control": [6, 21], "where": [6, 7, 21], "our": [6, 21, 22, 24], "context": [6, 12, 21, 24], "some": [6, 21, 24], "share": [6, 21], "storag": [6, 21], "among": 6, "all": [6, 9, 18, 22, 23, 24], "obs_ref": [6, 21], "zz": 6, "back": [6, 21, 24], "now": [6, 21, 22, 24], "one": [6, 12, 21], "function_refer": [6, 21, 25], "them": [6, 21, 22, 24], "circ": [6, 21], "need": [6, 7, 21, 22, 23, 24], "singl": 6, "6825": 6, "arrai": [6, 21, 23], "678": 6, "There": [7, 22, 23, 24], "usual": 7, "case": [7, 24], "you": [7, 12, 21, 22, 23, 24], "instal": [7, 21], "node": [7, 14, 21], "In": [7, 21, 22, 24], "do": [7, 21, 22, 23, 24], "pip": [7, 21], "kei": 7, "request": [7, 21, 23], "call_ibm": 7, "http": [7, 23], "ibm": [7, 25], "com": 7, "status_cod": 7, "200": 7, "new": [9, 14], "program": [9, 21], "model": 9, "leverag": [9, 24], "classic": [9, 21, 23], "resourc": [9, 10, 14, 23], "The": [9, 12, 13, 21], "sourc": [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "code": [9, 21], "project": 9, "avail": [9, 11, 12, 21, 25], "github": [9, 21], "background": 9, "motiv": 9, "goal": 9, "build": [9, 22], "block": [9, 12], "distribut": 9, "comput": [9, 11, 23], "manag": [9, 11], "assembl": 9, "togeth": 9, "demo": [9, 25], "electron": 9, "structur": 9, "problem": 9, "extra": 9, "infrastructur": 9, "link": 9, "tutori": 9, "approach": [9, 21], "write": [9, 24], "reveal": 9, "detail": [9, 23], "implement": [9, 23, 24], "user": [9, 21, 23], "hide": [9, 23], "packag": 9, "scratch": 9, "exist": [9, 13], "without": [9, 21], "intern": 9, "modif": 9, "wrap": [9, 14], "class": [9, 10, 11, 22, 23], "actor": [9, 13], "monkei": 9, "patch": 9, "solv": [9, 21], "overview": 9, "guid": 9, "anyth": 9, "fashion": 9, "specif": [9, 21, 24], "requir": [9, 14, 21, 23], "runtim": [9, 24], "primit": [9, 21, 23], "api": [9, 12, 13], "name": [10, 11, 21, 25], "host": [10, 11], "none": [10, 11, 12, 13, 14, 21, 25], "port": 10, "str": [10, 11, 14, 16, 17, 21, 25], "compute_resourc": [10, 11], "option": [10, 11, 12, 13, 21, 22, 23, 25], "address": 10, "int": [10, 14, 23, 24], "dict": [10, 14, 19, 21, 22, 23, 25], "float": [10, 12, 21, 25], "__init__": [10, 11, 23], "method": [10, 11, 12], "attribut": [10, 21], "token": 11, "available_compute_resourc": 11, "computeresourc": 11, "compute_resource_nam": 11, "compute_resource_host": 11, "k": 11, "authent": 11, "select": 11, "cluster": [11, 21, 22, 23, 24, 25], "object_ref": 12, "sequenc": 12, "timeout": 12, "r": 12, "store": [12, 13], "until": 12, "correspond": 12, "ref": [12, 13], "If": [12, 21], "ship": 12, "an": [12, 13, 21], "onc": 12, "been": 12, "each": [12, 21], "input": 12, "preserv": 12, "That": 12, "A": [12, 21, 25], "preced": 12, "b": [12, 24], "issu": 12, "warn": [12, 22, 23, 24], "insid": [12, 22], "async": 12, "await": 12, "instead": 12, "rai": [12, 13, 22, 23, 24], "asyncio": 12, "gather": 12, "union": [12, 14, 15, 21, 22, 25], "maximum": 12, "amount": 12, "time": [12, 21, 24], "second": [12, 21], "wait": 12, "befor": [12, 24], "python": [12, 13, 21, 24], "rais": 12, "gettimeouterror": 12, "set": [12, 21, 23], "take": 12, "longer": 12, "than": [12, 21, 23], "except": 12, "publicapi": [12, 13], "stabl": [12, 13], "across": [12, 13, 22], "releas": [12, 13, 23], "_owner": 13, "mai": [13, 21, 22], "evict": 13, "while": 13, "id": [13, 22], "actorhandl": 13, "should": [13, 23], "own": 13, "allow": [13, 21, 24], "lifetim": 13, "decoupl": 13, "process": 13, "note": 13, "owner": 13, "must": 13, "pass": [13, 21, 22], "prior": 13, "creator": 13, "exit": 13, "otherwis": 13, "still": 13, "lost": 13, "assign": 13, "when": [14, 24], "q": 14, "awesome_funct": 14, "seed": 14, "42": 14, "function_result": 14, "dictionari": 14, "backend": [15, 21, 22, 24, 25], "machin": [15, 21, 24], "raylet": 15, "circuit1": 15, "circuit2": 15, "circuit3": 15, "backend1": 15, "backend2": 15, "against": 15, "encoded_circuit": 16, "deseri": [16, 19], "encod": [16, 17], "decod": 16, "string": 17, "regist": 18, "account": 19, "qiskitruntimeservic": [19, 20, 21, 25], "active_account": 19, "instanc": [19, 21, 24], "servic": [20, 21, 25], "todai": 21, "lot": [21, 22], "experi": [21, 22, 23], "happen": 21, "manual": 21, "scalabl": 21, "give": [21, 24], "tool": 21, "workload": 21, "worri": 21, "about": 21, "underli": 21, "achiev": 21, "advantag": 21, "figur": 21, "mechan": 21, "combin": 21, "how": [21, 22, 25], "orchestr": 21, "hybrid": 21, "effici": 21, "abstract": 21, "maxim": 21, "flexibl": 21, "multi": 21, "cloud": 21, "hpc": 21, "scenario": 21, "describ": 21, "associ": 21, "perform": 21, "itself": 21, "access": 21, "sharabl": 21, "between": 21, "resolv": 21, "wai": [21, 22, 24], "first": [21, 22], "look": [21, 22, 24], "turn": [21, 24], "It": [21, 22], "send": 21, "locat": 21, "cirucit": 21, "m": 21, "know": 21, "move": 21, "someth": [21, 22, 24], "have": [21, 22, 23, 24], "As": [21, 22], "step": 21, "transform": 21, "automat": 21, "just": 21, "loop": 21, "follow": [21, 22, 23], "exp_val_remot": 21, "oper": [21, 25], "exp_val_execution_refer": 21, "circuit_list": 21, "see": [21, 22, 24, 25], "observ": [21, 23], "refernc": 21, "within": 21, "referec": 21, "becaus": [21, 24], "same": 21, "invoc": 21, "save": 21, "space": 21, "collect": 21, "And": 21, "cours": 21, "which": [21, 22, 23, 24], "appli": 21, "altern": 21, "collected_circuit": 21, "collected_exp_valu": 21, "estimatorresult": [21, 23], "demand": 21, "other": 21, "accept": 21, "capac": 21, "mem": 21, "exp_val_result": 21, "counterpart": 21, "would": 21, "decid": 21, "over": 21, "configur": [21, 24, 25], "notion": 21, "defin": 21, "By": 21, "default": [21, 25], "alwai": 21, "mani": 21, "load_configur": [21, 25], "path_to_config_fil": 21, "concept": 21, "place": 21, "simpl": [21, 23], "pyscf": 21, "matplotlib": [21, 25], "serverless_config": [21, 25], "json": [21, 25], "iz": 21, "metadata": [21, 23], "8821732": 21, "abov": 21, "toi": 21, "grasp": 21, "what": [21, 24], "go": 21, "switch": 21, "advanc": 21, "demonstr": 21, "o": [21, 22, 23, 24, 25], "pyplot": [21, 25], "plt": [21, 25], "qiskit_natur": [21, 25], "driver": [21, 25], "molecul": [21, 25], "algorithm": [21, 25], "optim": [21, 25], "spsa": [21, 25], "sy": [21, 25], "path": [21, 25], "append": [21, 22, 24, 25], "source_fil": [21, 25], "electronic_structure_problem": [21, 25], "overal": 21, "architectur": [21, 25], "full": [21, 25], "here": [21, 25], "ground_state_solv": [21, 25], "initial_point": [21, 25], "np": [21, 25], "ndarrai": [21, 25], "pyscfdriv": [21, 25], "from_molecul": [21, 25], "es_problem": [21, 25], "electronicstructureproblem": [21, 25], "ansatz": [21, 25], "qubit_convert": [21, 25], "second_q_op": [21, 25], "cobyla": [21, 25], "maxit": [21, 25], "500": [21, 25], "session": [21, 25], "vqe": [21, 25], "estimatorvq": [21, 25], "init_point": [21, 25], "vqe_result": [21, 25], "compute_minimum_eigenvalu": [21, 25], "optimal_valu": [21, 25], "ibmqbackend": [21, 25], "hardware_efficient_ansatz": [21, 25], "zip": [21, 25], "16": 21, "config": [21, 25], "file": [21, 25], "ibm_remot": [21, 25], "17": 21, "18": [21, 24], "ibmq_qasm_simul": [21, 25], "ibmbackend": [21, 25], "39": [21, 25], "22": 21, "captur": [21, 25], "energi": [21, 25], "geometri": [21, 25], "h": [21, 25], "li": [21, 25], "charg": [21, 25], "01": [21, 25], "001": [21, 25], "optimization_level": [21, 25], "resilience_level": [21, 25], "shot": [21, 25], "4000": [21, 25], "23": 21, "e": [21, 25], "shift": [21, 25], "1696368708335771": 21, "094948730347002": 21, "9811731914750684": 21, "609784771130333": [21, 25], "781951626949075": [21, 25], "870414678425503": [21, 25], "779421641963911": 21, "876900357296077": 21, "8515878699005714": 21, "24": 21, "dist": [21, 25], "plot": [21, 25], "label": [21, 25], "xlabel": [21, 25], "lih": [21, 25], "ylabel": [21, 25], "enrgi": [21, 25], "legend": [21, 25], "show": [21, 25], "25": 21, "bond_l": [21, 25], "enumer": [21, 25], "histori": [21, 25], "f": [21, 22, 23, 24, 25], "bond": [21, 25], "length": [21, 25], "titl": [21, 25], "layer": 21, "form": [21, 22], "helm": 21, "chart": 21, "kubernet": 21, "deploy": 21, "premis": 21, "On": 21, "top": 21, "terraform": 21, "templat": 21, "popular": 21, "vendor": 21, "repositori": 21, "document": 21, "notebook": 21, "filterwarn": [22, 23, 24], "ignor": [22, 23, 24], "aer": [22, 24], "aersimul": [22, 24], "fake_provid": 22, "fakevigo": [22, 24], "fakealmaden": [22, 24], "fakebrooklyn": [22, 24], "fakecasablanca": [22, 24], "review": 22, "expos": 22, "manner": 22, "One": 22, "himself": 22, "handl": 22, "stuff": 22, "like": 22, "insud": 22, "your_modul": 22, "Then": 22, "funciton": [22, 23], "perspect": 22, "circuits_id": 22, "backend_id": 22, "fake_backend": 22, "from_backend": [22, 24], "task_id": 22, "0x7fc1e0696610": 22, "0x7fc1c1290750": 22, "0x7fc1c12900d0": 22, "0x7fc170f95b50": 22, "0x7fc1c19c5b50": 22, "0x7fc1b0a744d0": 22, "0x7fc1b0a74a50": 22, "0x7fc1c11f1fd0": 22, "0x7fc1c11f1d90": 22, "0x7fc1c16b6a10": 22, "0x7fc1d115f590": 22, "0x7fc1c118ca90": 22, "0x7fc1c118ca50": 22, "0x7fc1c123fb10": 22, "0x7fc1c123fe90": 22, "0x7fc190855110": 22, "0x7fc190855910": 22, "0x7fc1712482d0": 22, "0x7fc171248ad0": 22, "0x7fc1c1260d90": 22, "0x7fc1e0696ed0": 22, "0x7fc1c120f750": 22, "0x7fc1c130e410": 22, "0x7fc1b0a5ba10": 22, "0x7fc1b0a8c8d0": 22, "0x7fc1b0a8ca50": 22, "0x7fc1c146ad50": 22, "0x7fc1c146a810": 22, "0x7fc1c1168a90": 22, "0x7fc1c117fbd0": 22, "0x7fc1c1290850": 22, "0x7fc1c16ed2d0": 22, "0x7fc170f7e410": 22, "0x7fc1c11bff90": 22, "0x7fc1c11a1310": 22, "0x7fc1c11a1210": 22, "0x7fc1c11dadd0": 22, "0x7fc1c11da7d0": 22, "0x7fc1b0af9710": 22, "0x7fc1c127a250": 22, "boilerpl": 22, "pointer": [22, 24], "applic": 22, "better": [22, 23], "parallel_transpil": 22, "shrink": 22, "certain": 22, "situat": 22, "0x7fc1e0ca0d90": 22, "0x7fc1b0c8bd90": 22, "0x7fc1814c9790": 22, "0x7fc181484190": 22, "0x7fc1e0d243d0": 22, "0x7fc190b5d110": 22, "0x7fc190ee9510": 22, "0x7fc1b0ced110": 22, "0x7fc1b0ced590": 22, "0x7fc1814e1150": 22, "0x7fc1b0c8bcd0": 22, "0x7fc1814e1c10": 22, "0x7fc1e0c89150": 22, "0x7fc1e0c89ed0": 22, "0x7fc18137fb10": 22, "0x7fc1b0df7a10": 22, "0x7fc1d15fbd90": 22, "0x7fc1e0bfef50": 22, "0x7fc1e0bfe850": 22, "0x7fc1a19e7b10": 22, "0x7fc18137f050": 22, "0x7fc190eb5290": 22, "0x7fc190ad8e10": 22, "0x7fc190aef990": 22, "0x7fc190b92390": 22, "0x7fc181369c50": 22, "0x7fc1e0b904d0": 22, "0x7fc190aa4250": 22, "0x7fc1814e1050": 22, "0x7fc181484310": 22, "0x7fc1e0cd9250": 22, "0x7fc181369790": 22, "0x7fc190bdc4d0": 22, "0x7fc181494f10": 22, "0x7fc190f01150": 22, "0x7fc1d1612e90": 22, "0x7fc1e0d0c910": 22, "0x7fc1b0d0d410": 22, "0x7fc1a1a13610": 22, "0x7fc1a1b28510": 22, "onli": [22, 23], "line": 22, "unnecessari": [22, 23], "coupl": [23, 24], "rule": 23, "softwar": 23, "improv": 23, "awar": 23, "he": 23, "littl": 23, "possibl": 23, "gener": 23, "pattern": 23, "avoid": 23, "antipattern": 23, "io": 23, "doc": 23, "en": 23, "9": [23, 24, 25], "design": 23, "index": 23, "html": 23, "opflow": 23, "add_prefix": 23, "prefix_depth": 23, "num_qubit": 23, "compos": 23, "quantum": 23, "relat": 23, "closer": 23, "qpu": 23, "measure_exp_v": 23, "len": 23, "yourclass": 23, "self": [23, 24], "routin": 23, "new_circuit": 23, "interact": 23, "oobject": 23, "high": 23, "level": 23, "from_list": 23, "iii": 23, "iiz": 23, "ixi": 23, "re": 23, "15866755": 23, "37974414": 23, "entir": 24, "swap": 24, "part": 24, "work": 24, "try": 24, "test": 24, "mock": 24, "u3": 24, "417": 24, "9487": 24, "2238": 24, "y": 24, "start": 24, "compil": 24, "doe": 24, "transpiled_circuit": 24, "idle_wir": 24, "fals": 24, "fold": 24, "global": 24, "phase": 24, "u1": 24, "\u03c0": 24, "12": 24, "13": 24, "3\u03c0": 24, "14": 24, "But": 24, "u": 24, "executon": 24, "fetch": 24, "actual": 24, "remotely_transpiled_circuit": 24, "readi": 24, "final": 24, "1306": 24, "1556": 24, "2178": 24, "7588": 24, "70376": 24, "641": 24, "944196508933282": 24, "0866": 24, "12636": 24, "81784": 24, "627327644292588": 24, "01523521327176": 24, "724": 24, "99285": 24, "685": 24, "238171820801467": 24, "2928": 24, "5143": 24, "080101": 24, "3885": 24, "chang": 24, "definit": 24, "small": 24, "chunk": 24, "dummi": 24, "later": 24, "dummyclass": 24, "sum_n_tim": 24, "n_time": 24, "sum_remot": 24, "sum_n_times_patch": 24, "dummy_class": 24, "initi": 25, "1707744855994744": 25, "095140570899344": 25, "98185028319679": 25, "780559256729807": 25, "87709219784842": 25, "852264961622293": 25}, "objects": {"": [[1, 0, 0, "-", "quantum_serverless"]], "quantum_serverless": [[0, 0, 0, "-", "core"], [2, 0, 0, "-", "library"], [3, 0, 0, "-", "serializers"]], "quantum_serverless.core": [[10, 1, 1, "", "ComputeResource"], [11, 1, 1, "", "Provider"], [12, 3, 1, "", "get"], [13, 3, 1, "", "put"], [14, 3, 1, "", "run_qiskit_remote"]], "quantum_serverless.core.ComputeResource": [[10, 2, 1, "", "__init__"]], "quantum_serverless.core.Provider": [[11, 2, 1, "", "__init__"]], "quantum_serverless.library": [[15, 3, 1, "", "parallel_transpile"]], "quantum_serverless.serializers.serializers": [[16, 3, 1, "", "circuit_deserializer"], [17, 3, 1, "", "circuit_serializer"], [18, 3, 1, "", "register_all_serializers"], [19, 3, 1, "", "service_deserializer"], [20, 3, 1, "", "service_serializer"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "function", "Python function"]}, "titleterms": {"core": [0, 10, 11, 12, 13, 14], "modul": 0, "quantum_serverless": [0, 2, 3, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "quantum": [0, 1, 2, 3, 9, 21], "serverless": [0, 1, 2, 3, 9, 21, 22, 23, 24], "class": [0, 2, 24], "function": [0, 2, 24], "api": 1, "refer": [1, 21], "librari": [2, 15], "serial": [3, 16, 17, 18, 19, 20], "guid": [4, 5, 6, 7], "run": 4, "anyth": 4, "distribut": [4, 21], "fashion": 4, "specif": [5, 7], "resourc": [5, 21], "requir": [5, 7], "qiskit": 6, "runtim": 6, "primit": 6, "quantumserverless": 6, "packag": [7, 23], "content": 9, "computeresourc": 10, "provid": 11, "get": 12, "put": 13, "run_qiskit_remot": 14, "parallel_transpil": 15, "circuit_deseri": 16, "circuit_seri": 17, "register_all_seri": 18, "service_deseri": 19, "service_seri": 20, "background": 21, "motiv": 21, "goal": 21, "build": 21, "block": 21, "comput": 21, "alloc": 21, "execut": [21, 25], "manag": 21, "assembl": 21, "all": 21, "togeth": 21, "demo": 21, "electron": [21, 25], "structur": [21, 25], "problem": [21, 25], "implement": [21, 22, 25], "initi": 21, "extra": 21, "infrastructur": 21, "link": 21, "http": 21, "ibm": 21, "biz": 21, "q": 21, "repo": 21, "doc": 21, "demo1": 21, "tutori": [22, 23, 24, 25], "approach": [22, 24], "code": [22, 24], "write": [22, 23], "1": [22, 24], "reveal": 22, "detail": 22, "user": 22, "2": [22, 24], "hide": 22, "from": [22, 23], "scratch": 23, "convert": 24, "exist": 24, "without": 24, "intern": 24, "modif": 24, "wrap": 24, "task": 24, "actor": 24, "monkei": 24, "patch": 24, "solv": 25, "overview": 25}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "nbsphinx": 4, "sphinx": 57}, "alltitles": {"Core module (quantum_serverless.core)": [[0, "core-module-quantum-serverless-core"]], "Quantum serverless core module classes and functions": [[0, "quantum-serverless-core-module-classes-and-functions"]], "Quantum serverless API References": [[1, "quantum-serverless-api-references"]], "Library (quantum_serverless.library)": [[2, "library-quantum-serverless-library"]], "Quantum serverless library of functions and classes": [[2, "quantum-serverless-library-of-functions-and-classes"]], "Serializers (quantum_serverless.serializers.serializers)": [[3, "serializers-quantum-serverless-serializers-serializers"]], "Quantum serverless serializers": [[3, "quantum-serverless-serializers"]], "Guide: run anything in distributed fashion": [[4, "Guide:-run-anything-in-distributed-fashion"]], "Guide: specific resource requirements": [[5, "Guide:-specific-resource-requirements"]], "Guide: Qiskit Runtime Primitives with QuantumServerless": [[6, "Guide:-Qiskit-Runtime-Primitives-with-QuantumServerless"]], "Guide: specific package requirements": [[7, "Guide:-specific-package-requirements"]], "Quantum serverless": [[9, "quantum-serverless"], [21, "Quantum-serverless"]], "Contents": [[9, "contents"]], "quantum_serverless.core.ComputeResource": [[10, "quantum-serverless-core-computeresource"]], "quantum_serverless.core.Provider": [[11, "quantum-serverless-core-provider"]], "quantum_serverless.core.get": [[12, "quantum-serverless-core-get"]], "quantum_serverless.core.put": [[13, "quantum-serverless-core-put"]], "quantum_serverless.core.run_qiskit_remote": [[14, "quantum-serverless-core-run-qiskit-remote"]], "quantum_serverless.library.parallel_transpile": [[15, "quantum-serverless-library-parallel-transpile"]], "quantum_serverless.serializers.serializers.circuit_deserializer": [[16, "quantum-serverless-serializers-serializers-circuit-deserializer"]], "quantum_serverless.serializers.serializers.circuit_serializer": [[17, "quantum-serverless-serializers-serializers-circuit-serializer"]], "quantum_serverless.serializers.serializers.register_all_serializers": [[18, "quantum-serverless-serializers-serializers-register-all-serializers"]], "quantum_serverless.serializers.serializers.service_deserializer": [[19, "quantum-serverless-serializers-serializers-service-deserializer"]], "quantum_serverless.serializers.serializers.service_serializer": [[20, "quantum-serverless-serializers-serializers-service-serializer"]], "Background, motivation and goals": [[21, "Background,-motivation-and-goals"]], "Building blocks of distributed computation": [[21, "Building-blocks-of-distributed-computation"]], "Resource allocation and execution management": [[21, "Resource-allocation-and-execution-management"]], "Assembling all together": [[21, "Assembling-all-together"]], "Demo: electronic structure problem": [[21, "Demo:-electronic-structure-problem"]], "Implementation": [[21, "Implementation"], [25, "Implementation"]], "Initialization": [[21, "Initialization"]], "Extra: infrastructure": [[21, "Extra:-infrastructure"]], "Links and references": [[21, "Links-and-references"]], "https://ibm.biz/qs-repo": [[21, "https://ibm.biz/qs-repo"]], "https://ibm.biz/qs-docs": [[21, "https://ibm.biz/qs-docs"]], "https://ibm.biz/qs-demo1": [[21, "https://ibm.biz/qs-demo1"]], "Tutorial: approaches to serverless code writing": [[22, "Tutorial:-approaches-to-serverless-code-writing"]], "Approach #1: revealing details of implementations to user": [[22, "Approach-#1:-revealing-details-of-implementations-to-user"]], "Approach #2: hiding details of implementations from user": [[22, "Approach-#2:-hiding-details-of-implementations-from-user"]], "Tutorial: writing serverless package from scratch": [[23, "Tutorial:-writing-serverless-package-from-scratch"]], "Tutorial: converting existing code to serverless without internal code modifications": [[24, "Tutorial:-converting-existing-code-to-serverless-without-internal-code-modifications"]], "Approach #1: wrapping function / classes as tasks / actors": [[24, "Approach-#1:-wrapping-function-/-classes-as-tasks-/-actors"]], "Approach #2: Monkey-patching": [[24, "Approach-#2:-Monkey-patching"]], "Tutorial: solving electronic structure problem": [[25, "Tutorial:-solving-electronic-structure-problem"]], "Overview": [[25, "Overview"]], "Execution": [[25, "Execution"]]}, "indexentries": {"module": [[0, "module-quantum_serverless.core"], [1, "module-quantum_serverless"], [2, "module-quantum_serverless.library"], [3, "module-quantum_serverless.serializers"]], "quantum_serverless.core": [[0, "module-quantum_serverless.core"]], "quantum_serverless": [[1, "module-quantum_serverless"]], "quantum_serverless.library": [[2, "module-quantum_serverless.library"]], "quantum_serverless.serializers": [[3, "module-quantum_serverless.serializers"]], "computeresource (class in quantum_serverless.core)": [[10, "quantum_serverless.core.ComputeResource"]], "__init__() (computeresource method)": [[10, "quantum_serverless.core.ComputeResource.__init__"]], "provider (class in quantum_serverless.core)": [[11, "quantum_serverless.core.Provider"]], "__init__() (provider method)": [[11, "quantum_serverless.core.Provider.__init__"]], "get() (in module quantum_serverless.core)": [[12, "quantum_serverless.core.get"]], "put() (in module quantum_serverless.core)": [[13, "quantum_serverless.core.put"]], "run_qiskit_remote() (in module quantum_serverless.core)": [[14, "quantum_serverless.core.run_qiskit_remote"]], "parallel_transpile() (in module quantum_serverless.library)": [[15, "quantum_serverless.library.parallel_transpile"]], "circuit_deserializer() (in module quantum_serverless.serializers.serializers)": [[16, "quantum_serverless.serializers.serializers.circuit_deserializer"]], "circuit_serializer() (in module quantum_serverless.serializers.serializers)": [[17, "quantum_serverless.serializers.serializers.circuit_serializer"]], "register_all_serializers() (in module quantum_serverless.serializers.serializers)": [[18, "quantum_serverless.serializers.serializers.register_all_serializers"]], "service_deserializer() (in module quantum_serverless.serializers.serializers)": [[19, "quantum_serverless.serializers.serializers.service_deserializer"]], "service_serializer() (in module quantum_serverless.serializers.serializers)": [[20, "quantum_serverless.serializers.serializers.service_serializer"]]}})