﻿using System;
using System.Collections.Generic;

namespace DataAccessLayer;

public partial class Employee
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Address { get; set; }
}
