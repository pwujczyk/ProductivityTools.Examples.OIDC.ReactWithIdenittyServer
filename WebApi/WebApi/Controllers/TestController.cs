using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : Controller
    {
        [HttpGet]
        [Route("Hi")]
        public string Hi()
        {
            return $"Hi {DateTime.Now}";
        }

        [HttpGet]
        [Route("HiSecure")]
        public string HiSecure()
        {
            return $"Hi secure {DateTime.Now}";
        }
    }
}