using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace BeaconBackend
{
    public class SearchService
    {
        public async Task<HttpResponseMessage> MakeRequest()
        {
            var client = new HttpClient();
            var queryString = HttpUtility.ParseQueryString("ids=[4]");

            // Request headers
            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", "b0dd917d080648df8b3729531b2c6924");
            var uri = "https://kesko.azure-api.net/v1/search/articles?" + queryString;

            HttpResponseMessage response;
            // Request body
            byte[] byteData = Encoding.UTF8.GetBytes("");
            using (var content = new ByteArrayContent(byteData))
            {
               content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
               response = await client.PostAsync(uri, content);               
            }

            return response;
        }
    }
}
