using API_Cep.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace API_Cep.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}