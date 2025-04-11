using System;
using System.Collections.Generic;

namespace DataAccessLayer;

public partial class Customer
{
    public int CustomerId { get; set; }

    public string Name { get; set; } = null!;
}
