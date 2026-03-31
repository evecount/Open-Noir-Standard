import os
import json
import shutil

projects_tools = {
    'VaultCast': ['audit_presence', 'fetch_intelligence', 'archive_memory', 'report_incident'],
    'BidNiche': ['reverse_auction', 'audit_capacity', 'escrow_integrity', 'report_incident'],
    'ClearBill': ['automated_settlement', 'audit_billing', 'track_flow', 'report_incident'],
    'ClientReview': ['sentiment_telemetry', 'verify_trust', 'reputation_audit', 'report_incident'],
    'CohortFlow': ['manage_cohorts', 'audit_curriculum', 'issue_certification', 'report_incident'],
    'Platformify': ['monitor_assets', 'audit_access', 'platform_observability', 'report_incident'],
    'ProspectOS': ['discover_leads', 'audit_intent', 'outreach_automation', 'report_incident'],
    'RFPCentral': ['manage_rfp', 'audit_contracts', 'execution_governance', 'report_incident'],
    'SkillSprint': ['discover_skills', 'audit_capability', 'workforce_governance', 'report_incident'],
    'TradeOS': ['track_inventory', 'audit_supply_chain', 'optimize_logistics', 'report_incident'],
    'TribeHost': ['manage_nodes', 'audit_engagement', 'network_governance', 'report_incident']
}

base_path = r'c:\Users\User\Documents\Agent Brainfood'
src_md = os.path.join(base_path, 'NOIR_ARCHITECTURE.md')
src_bor = os.path.join(base_path, 'AGENTIC_BILL_OF_RIGHTS.md')

for p, tools in projects_tools.items():
    dest_dir = os.path.join(base_path, p, 'public')
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
    
    # Anchor Tools Index
    with open(os.path.join(dest_dir, 'NODE_TOOLS.json'), 'w') as f:
        json.dump({'node': p, 'version': '1.0', 'tools': tools}, f, indent=2)
    
    # Anchor Protocols
    shutil.copy(src_md, os.path.join(dest_dir, 'NOIR_ARCHITECTURE.md'))
    shutil.copy(src_bor, os.path.join(dest_dir, 'AGENTIC_BILL_OF_RIGHTS.md'))
    print(f"Noir Protocol (v1.6) + Bill of Rights (v1.2) + Tools deployed to {p}/public/")
