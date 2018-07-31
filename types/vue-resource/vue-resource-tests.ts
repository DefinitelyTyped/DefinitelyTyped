

Vue.http.options.root = '/root';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

new Vue({
    http: {
        root: '/root',
        headers: {
            Authorization: 'Basic'
        }
    }
});

Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

class App extends Vue {
    ready() {
        this.$http({ url: '/someUrl', method: 'GET' }).then((response) => {
            //
        }, (response) => {
            //
        });

        this.$http.get('/someUrl').then((response) => {
            const status = response.status;
            const headers = response.headers();
            response.headers('expires');

            this.$set('someData', response.data);
            this.$set('someJsonData', response.json());
            this.$set('someTextData', response.text());
            this.$set('someBlobData', response.blob());
        });

        var resource = this.$resource('someItem/{id}');
        resource.get({id: 1}).then((response) => {});
        resource.save({id: 1}, {item: 30}).then((responce) => {});
    }
}

Vue.http.get('/someUrl', {}, {});

Vue.http.interceptors.push({
    request: function(request) {
        return request;
    },
    response: function(response) {
        return response;
    }
});

Vue.http.interceptors.push(function() {
    return {
        request: function(request) {
            return request;
        },
        response: function(response) {
            return response;
        }
    }
});
