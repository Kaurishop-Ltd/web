serve:
	docker run -v $(shell pwd):/static -p 8080:80 flashspys/nginx-static