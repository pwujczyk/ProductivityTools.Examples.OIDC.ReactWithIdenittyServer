using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : Controller
    {
        [HttpGet]
        [Route("Hi")]
  
        public object Hi()
        {
            return new { Hi = $"Hi unsecured {DateTime.Now}" };
        }

        [HttpGet]
        [Route("HiSecure")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public object HiSecure()
        {
            return new { Hi = $"Hi secured {DateTime.Now}" };
        }
    }
}