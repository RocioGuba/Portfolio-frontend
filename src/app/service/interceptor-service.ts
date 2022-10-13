import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

export class InterceptorService {
    constructor(private tokenService: TokenService){}

    intercept(req: HttpRequest <any>, next:HttpHandler): Observable<HttpEvent<any>>{
        let intReq = req;
        const token =this.tokenService.getToken();
        if(token != null){
            intReq =req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + token)
            });
        }
        return next.handle(intReq);
    }
}