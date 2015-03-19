			var stSearch = function() {
				var query = document.getElementById("st-search-input").value;
				window.location.href = "/search/#stq=" + query + "&stp=1";
			};
			var stRenderFunction = function(documentType, item) {
				var header = '<header><h2><a class="st-search-result-link" href="' + item['url'] + '">' + item['title'] + '</a></h2></header>'
				var body = '<div class="text"><p>' + item['body'] + '</p></div>';
				return '<article>' + header + body + '</article>';
			};
			$( '<li class="nav-search-form"><form action="#" onsubmit="stSearch();return false;" autocomplete="on"><label id="nav-search-label" for="st-search-input">Search:</label><input id="search_submit" value="Search" type="submit"><input id="st-search-input" name="search" type="text" placeholder="search https://iyware.com"></form></li>' ).insertAfter( ".nav-search" );
			$("#st-search-input").swiftype({
				engineKey: "sg3kn6rAnozjxvM4k8nk"
			});
			$("#st-search-input").swiftypeSearch({
				renderFunction: stRenderFunction,
				perPage: 5,
				engineKey: "sg3kn6rAnozjxvM4k8nk",
				resultContainingElement: "#st-results-container"
			});
			$("#st-search-input2").swiftype({
				engineKey: "sg3kn6rAnozjxvM4k8nk"
			});
			$("#st-search-input2").swiftypeSearch({
				renderFunction: stRenderFunction,
				perPage: 5,
				engineKey: "sg3kn6rAnozjxvM4k8nk",
				resultContainingElement: "#st-results-container"
			});